import type { DiaryStatus, MoodStatus } from '@/types/diary.type'

export interface DiaryRemoteModel {
  id: number
  content: string
  created_at: string
  status: DiaryStatus
  mood: MoodStatus
}
