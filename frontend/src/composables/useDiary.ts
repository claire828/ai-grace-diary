import type { DiaryRemoteModel } from '@/models'
import type { DiaryStatus } from '@/types'
import { createResource, postJSON } from '@/utils'
import { catchError, defer, map, Subject, takeUntil, tap } from 'rxjs'
import type { AjaxResponse } from 'rxjs/ajax'
import { onUnmounted, ref } from 'vue'

export function useDiary() {
  const destroy$ = new Subject<void>()
  const diaries = ref<DiaryRemoteModel[]>([])
  const url = 'http://localhost/diaries'
  // use shared resource helper
  const api = createResource<DiaryRemoteModel>(url)

  // ---  observables (cold) - component can pipe/subscribe and handle cancellation ---
  const fetchDiaries$ = () =>
    api.get().pipe(
      tap((data) => (diaries.value = data)),
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Fetch diaries failed:', err)
        throw err
      }),
    )

  const deleteDiary$ = (id: number) =>
    api.delete(id).pipe(
      tap(() => {
        diaries.value = diaries.value.filter((d) => d.id !== id)
      }),
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Delete request failed:', err)
        throw err
      }),
    )

  const addDiary$ = (content: string) =>
    api.post({ content }).pipe(
      map((res: AjaxResponse<unknown>) => (res.response as { data: DiaryRemoteModel }).data),
      tap((newDiary) => diaries.value.unshift(newDiary)),
      takeUntil(destroy$),
      catchError((err) => {
        console.error('Add diary request failed:', err)
        throw err
      }),
    )

  const updateStatus = (id: number, toStatus: DiaryStatus) => {
    const diary = diaries.value.find((d) => d.id === id)
    if (diary) {
      diary.status = toStatus
    }
  }

  const analyzeDiary$ = (id: number) => {
    return defer(() => {
      updateStatus(id, 'analyzing')
      return postJSON<AjaxResponse<unknown>>(`${url}/${+id}/analyze`)
    }).pipe(
      tap(() => updateStatus(id, 'analyzed')),
      catchError((err) => {
        console.error('Analyze diary request failed:', err)
        updateStatus(id, 'draft')
        throw err
      }),
    )
  }

  // --- Convenience actions: Immediately trigger side effects (e.g., delete/add/analyze).
  // Use only when you do not need to track isLoading/error states.
  // Suitable for direct actions that immediately update the UI. ---
  const actions = {
    fetchDiaries: () => fetchDiaries$().subscribe(),
    addDiary: (content: string) => addDiary$(content).subscribe(),
    deleteDiary: (id: number) => deleteDiary$(id).subscribe(),
    analyzeDiary: (id: number) => analyzeDiary$(id).subscribe(),
  }

  onUnmounted(() => {
    destroy$.next()
    destroy$.complete()
  })

  return {
    diaries,
    actions,
    // --- raw factories: Provide observable factories for use with useObservable in components to flexibly obtain isLoading, error, and data states, and compose custom pipelines. ---
    fetchDiaries$,
    addDiary$,
    deleteDiary$,
    analyzeDiary$,
  }
}
