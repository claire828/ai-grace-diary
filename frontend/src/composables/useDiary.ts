import type { DiaryRemoteModel } from '@/models'
import { createResource } from '@/utils'
import { catchError, Subject, switchMap, takeUntil, tap } from 'rxjs'
import { onUnmounted, ref } from 'vue'

export function useDiary() {
  const destroy$ = new Subject<void>()
  const diaries = ref<DiaryRemoteModel[]>([])
  const url = 'http://localhost/diaries'
  // use shared resource helper
  const api = createResource<DiaryRemoteModel>(url)
  const fetchDiaries = () =>
    api.get().pipe(
      tap((data) => (diaries.value = data)),
      takeUntil(destroy$),
    )

  const deleteDiary$ = (id: number) =>
    api.delete(id).pipe(
      tap(() => {
        diaries.value = diaries.value.filter((d) => d.id !== id)
      }),
      catchError((error) => {
        console.error('Delete request failed:', error)
        throw error
      }),
      takeUntil(destroy$),
    )

  const addDiary$ = (content: string) =>
    api.post({ content }).pipe(
      switchMap(() => fetchDiaries()),
      catchError((error) => {
        console.error('Add diary request failed:', error)
        throw error
      }),
      takeUntil(destroy$),
    )

  const actions = {
    fetchDiaries: () => fetchDiaries().subscribe(),
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
  }
}
