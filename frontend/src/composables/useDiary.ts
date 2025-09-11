import type { DiaryRemoteModel } from '@/models'
import { catchError, map, switchMap, tap } from 'rxjs'
import { fromAjax } from 'rxjs/internal/ajax/ajax'
import { ref } from 'vue'

export function useDiary() {
  const diaries = ref<DiaryRemoteModel[]>([])
  const url = 'http://localhost/diaries'
  const fetchDiaries$ = fromAjax<{ data: DiaryRemoteModel[] }>({
    url,
  }).pipe(
    map((data) => (data.response?.data as DiaryRemoteModel[]) ?? []),
    tap((data) => (diaries.value = data)),
  )

  const deleteDiary$ = (id: number) =>
    fromAjax({ url: `${url}/${id}`, method: 'DELETE' }).pipe(
      switchMap(() => fetchDiaries$),
      catchError((error) => {
        console.error('Delete request failed:', error)
        throw error
      }),
    )

  const addDiary$ = (content: string) =>
    fromAjax({ url, method: 'POST', body: { content } }).pipe(
      catchError((error) => {
        console.error('Add diary request failed:', error)
        throw error
      }),
    )

  const actions = {
    fetchDiaries: () => fetchDiaries$.subscribe(),
    addDiary: (content: string) => addDiary$(content).subscribe(),
    deleteDiary: (id: number) => deleteDiary$(id).subscribe(),
    editDiary: (id: number) => console.log('edit diary with id:', id),
    analyzeDiary: (id: number) => console.log('analyze diary with id:', id),
  }

  return {
    diaries,
    actions,
  }
}
