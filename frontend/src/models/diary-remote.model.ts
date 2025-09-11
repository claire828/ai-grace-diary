import type { DiaryStatus } from '@/types/diary.type'

export interface DiaryRemoteModel {
  id: number
  content: string
  created_at: string
  status: DiaryStatus
}
