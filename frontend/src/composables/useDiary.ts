import type { DiaryRemoteModel } from '@/models'
import { catchError, map, switchMap, tap } from 'rxjs'
import { fromAjax } from 'rxjs/internal/ajax/ajax'
import { ref } from 'vue'

export function useDiary() {
  const diaries = ref<DiaryRemoteModel[]>([])

  const fetchDiaries$ = fromAjax<{ data: DiaryRemoteModel[] }>({
    url: 'http://localhost/diaries',
  }).pipe(
    map((data) => (data.response?.data as DiaryRemoteModel[]) ?? []),
    tap((data) => (diaries.value = data)),
  )

  const deleteDiary$ = (id: number) =>
    fromAjax({ url: `http://localhost/diaries/${id}`, method: 'DELETE' }).pipe(
      switchMap(() => fetchDiaries$),
      catchError((error) => {
        console.error('Delete request failed:', error)
        throw error
      }),
    )

  const actions = {
    deleteDiary: (id: number) => deleteDiary$(id).subscribe(),
    editDiary: (id: number) => console.log('edit diary with id:', id),
    analyzeDiary: (id: number) => console.log('analyze diary with id:', id),
  }

  // 初始載入
  fetchDiaries$.subscribe()

  return {
    diaries,
    actions,
    // 如果需要，也可以 export observable
    fetchDiaries$,
    deleteDiary$,
  }
}
