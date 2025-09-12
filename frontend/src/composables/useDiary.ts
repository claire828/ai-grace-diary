import type { DiaryRemoteModel } from '@/models'
import { catchError, map, Subject, switchMap, takeUntil, tap } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { onUnmounted, ref } from 'vue'

export function useDiary() {
  const destroy$ = new Subject<void>()
  const diaries = ref<DiaryRemoteModel[]>([])
  const url = 'http://localhost/diaries'
  // factory: create a fresh GET observable each time
  const fetchDiaries = () =>
    ajax.getJSON<{ data: DiaryRemoteModel[] }>(url).pipe(
      map((response) => response.data as DiaryRemoteModel[]),
      tap((data) => (diaries.value = data)),
      takeUntil(destroy$),
    )

  const deleteDiary$ = (id: number) =>
    ajax.delete(`${url}/${id}`).pipe(
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
    ajax.post(url, { content }, { 'Content-Type': 'application/json' }).pipe(
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
