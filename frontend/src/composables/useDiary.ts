import type { DiaryAnalysisRemote, DiaryRemoteModel } from '@/models'
import type { DiaryStatus } from '@/types'
import { createResource, getJSON, postJSON } from '@/utils'
import { catchError, defer, map, Subject, takeUntil, tap } from 'rxjs'
import type { AjaxResponse } from 'rxjs/ajax'
import { onUnmounted, readonly, ref } from 'vue'

export function useDiary() {
  const destroy$ = new Subject<void>()
  const diaries = ref<DiaryRemoteModel[]>([])

  const url = 'http://localhost/diaries'
  // use shared resource helper
  const api = createResource<DiaryRemoteModel>(url)

  // --- Pure observables (cold) - no side effects ---
  const fetchDiariesStream$ = () =>
    api.get().pipe(
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Fetch diaries failed:', err)
        throw err
      }),
    )

  const deleteDiaryStream$ = (id: number) =>
    api.delete(id).pipe(
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Delete request failed:', err)
        throw err
      }),
    )

  const addDiaryStream$ = (content: string) =>
    api.post({ content }).pipe(
      map((res: AjaxResponse<unknown>) => (res.response as { data: DiaryRemoteModel }).data),
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Add diary request failed:', err)
        throw err
      }),
    )

  const analyzeDiaryStream$ = (id: number) =>
    postJSON<AjaxResponse<unknown>>(`${url}/${+id}/analyze`).pipe(
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Analyze diary request failed:', err)
        throw err
      }),
    )

  const fetchDiaryAnalysisStream$ = (id: number | string) =>
    getJSON<{ data: DiaryAnalysisRemote }>(`${url}/${id}/analysis`).pipe(
      map((res) => res.data),
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Fetch diary analysis request failed:', err)
        throw err
      }),
    )

  // --- Helper functions ---
  const updateStatus = (id: number, toStatus: DiaryStatus) => {
    const diary = diaries.value.find((d) => d.id === id)
    if (diary) {
      diary.status = toStatus
    }
  }

  // --- Actions: Clean Observable-based actions without try/catch ---
  const actions = {
    fetchDiaries: () =>
      defer(() => fetchDiariesStream$())
        .pipe(tap((data: DiaryRemoteModel[]) => (diaries.value = data)))
        .subscribe(),

    addDiary: (content: string) =>
      defer(() => addDiaryStream$(content))
        .pipe(tap((newDiary: DiaryRemoteModel) => diaries.value.unshift(newDiary)))
        .subscribe(),

    deleteDiary: (id: number) =>
      defer(() => deleteDiaryStream$(id))
        .pipe(
          tap(() => {
            diaries.value = diaries.value.filter((d) => d.id !== id)
          }),
        )
        .subscribe(),

    analyzeDiary: (id: number) =>
      defer(() => {
        updateStatus(id, 'analyzing')
        return analyzeDiaryStream$(id)
      })
        .pipe(
          tap(() => updateStatus(id, 'analyzed')),
          catchError((err) => {
            console.error('Analyze diary request failed:', err)
            updateStatus(id, 'draft')
            throw err
          }),
        )
        .subscribe(),

    fetchDiaryAnalysis: (id: number) => defer(() => fetchDiaryAnalysisStream$(id)).subscribe(),
  }

  onUnmounted(() => {
    destroy$.next()
    destroy$.complete()
  })

  return {
    // --- State (readonly to prevent direct mutation) ---
    diaries: readonly(diaries),

    // --- Actions ---
    actions,

    // --- Raw streams for advanced usage with useObservable ---
    streams: {
      fetchDiaries$: fetchDiariesStream$,
      addDiary$: addDiaryStream$,
      deleteDiary$: deleteDiaryStream$,
      analyzeDiary$: analyzeDiaryStream$,
      fetchDiaryAnalysis$: fetchDiaryAnalysisStream$,
    },
  }
}
