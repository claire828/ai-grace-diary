export type DiaryStatus = 'draft' | 'published' | 'editing' | 'analyzed'
// draft -> wait for user to write
// published -> finish, can analyze, can edit
// editing -> user is editing, client side.
// analyzed -> old entries, read-only
export type MoodStatus = 'Positive' | 'Negative' | 'Neutral' | 'Unknown'
