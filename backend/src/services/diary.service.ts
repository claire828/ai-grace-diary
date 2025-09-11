import pg from '@database';
import { HttpException } from '@exceptions/httpException';
import { Service } from 'typedi';

export type DiaryStatus = 'draft' | 'published' | 'analyzed';
export interface Diary {
  id?: number;
  content: string;
  created_at?: Date;
  status: DiaryStatus;
}

@Service()
export class DiaryService {
  public async createDiary(content: string): Promise<Diary> {
    // 新增日記預設為 draft
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

  // 編輯日記（僅限未分析）
  public async updateDiary(diaryId: number, content: string): Promise<Diary> {
    // 先檢查狀態
    const { rows } = await pg.query('SELECT * FROM diary WHERE id = $1', [diaryId]);
    if (!rows[0]) throw new HttpException(404, 'Diary not found');
    if (rows[0].status === 'analyzed') throw new HttpException(400, 'Diary already analyzed and locked');

    // 編輯後狀態自動轉 published
    const { rows: updated } = await pg.query('UPDATE diary SET content = $1, status = $2 WHERE id = $3 RETURNING *', [content, 'published', diaryId]);
    return updated[0];
  }

  public async deleteDiary(diaryId: number): Promise<void> {
    await pg.query('DELETE FROM diary WHERE id = $1', [diaryId]);
  }
}
