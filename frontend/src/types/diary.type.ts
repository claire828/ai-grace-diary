export type DiaryStatus = 'draft' | 'published' | 'analyzed'
// draft -> wait for user to write
// published -> finish, can analyze, can edit
// analyzed -> old entries, read-only
export type MoodStatus = 'Positive' | 'Negative' | 'Neutral' | 'Waiting for Analysis'
