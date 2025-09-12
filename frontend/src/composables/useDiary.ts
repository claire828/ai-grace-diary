import type { DiaryRemoteModel } from '@/models'
import { createResource } from '@/utils'
import { catchError, map, Subject, takeUntil, tap } from 'rxjs'
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

  // --- Convenience actions: subscribe internally and update local ref; cleaned up on unmount ---
  const actions = {
    fetchDiaries: () => fetchDiaries$().subscribe(),
    addDiary: (content: string) => addDiary$(content).subscribe(),
    deleteDiary: (id: number) => deleteDiary$(id).subscribe(),
    editDiary: (id: number) => console.log('edit diary with id:', id),
    analyzeDiary: (id: number) => console.log('analyze diary with id:', id),
  }

  onUnmounted(() => {
    destroy$.next()
    destroy$.complete()
  })

  return {
    diaries,
    actions,
    // raw factories for custom pipelines
    fetchDiaries$,
    addDiary$,
    deleteDiary$,
  }
}
