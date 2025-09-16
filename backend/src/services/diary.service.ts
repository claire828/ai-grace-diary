import pg from '@database';

export type DiaryStatus = 'draft' | 'analyzing' | 'analyzed';
export interface Diary {
  id?: number;
  content: string;
  created_at?: Date;
  status: DiaryStatus;
}

export class DiaryService {
  public async createDiary(content: string): Promise<Diary> {
    const { rows } = await pg.query('INSERT INTO diary (content, status) VALUES ($1, $2) RETURNING *', [content, 'draft']);
    console.log('created diary', rows);
    return rows[0];
  }

  public async getTodayDiary(): Promise<Diary | null> {
    const { rows } = await pg.query('SELECT * FROM diary WHERE created_at::date = CURRENT_DATE LIMIT 1');
    console.log('get diary', rows);
    return rows[0] || null;
  }

  public async getAllDiaries(): Promise<Diary[]> {
    const { rows } = await pg.query(`SELECT * FROM diary ORDER BY created_at DESC`);
    console.log('get all diaries', rows);
    return rows;
  }

  public async deleteDiary(diaryId: number): Promise<void> {
    await pg.query('DELETE FROM diary WHERE id = $1', [diaryId]);
  }

  public async getDiaryById(id: number): Promise<Diary | null> {
    const { rows } = await pg.query('SELECT * FROM diary WHERE id = $1', [id]);
    return rows[0] || null;
  }

  public async updateDiaryStatus(diaryId: number, status: DiaryStatus): Promise<void> {
    await pg.query('UPDATE diary SET status = $1 WHERE id = $2', [status, diaryId]);
  }
}

// Export singleton instance
export const diaryService = new DiaryService();
