export type DiaryStatus = 'draft' | 'analyzing' | 'analyzed';

export interface Diary {
  id?: number;
  content: string;
  created_at?: Date;
  status: DiaryStatus;
}
