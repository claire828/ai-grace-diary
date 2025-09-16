export type DiaryStatus = 'draft' | 'analyzing' | 'analyzed'
// draft -> wait for user to write
// analyzing -> finish, waiting for analyze
// analyzed -> done
export type MoodStatus = 'Positive' | 'Negative' | 'Neutral' | 'Waiting for Analysis'
export type DiaryActionType = 'delete' | 'analyze'
