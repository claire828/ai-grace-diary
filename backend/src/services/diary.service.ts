import { client } from '@/database';
import type { Diary, DiaryStatus } from '@/models/diary.model';
import { analyzeService } from './analyze.service';

export class DiaryService {
  public async createDiary(content: string): Promise<Diary> {
    const { rows } = await client.query('INSERT INTO diary (content, status) VALUES ($1, $2) RETURNING *', [content, 'draft']);
    console.log('created diary', rows);
    return rows[0];
  }

  public async getAllDiaries(): Promise<Diary[]> {
    const { rows } = await client.query(`SELECT * FROM diary ORDER BY created_at DESC`);
    console.log('get all diaries', rows);
    return rows;
  }

  public async deleteDiary(diaryId: number): Promise<void> {
    try {
      const diary = await this.getDiaryById(diaryId);
      if (!diary) {
        throw new Error(`Diary with ID ${diaryId} not found`);
      }

      if (diary.status === 'analyzed') {
        await analyzeService.deleteDiaryAnalysis(diaryId);
        console.log(`Deleted analysis data for diary ID: ${diaryId}`);
      }

      await client.query('DELETE FROM diary WHERE id = $1', [diaryId]);
      console.log(`Deleted diary with ID: ${diaryId}`);
    } catch (error) {
      console.error('Error deleting diary:', error);
      throw error;
    }
  }

  public async getDiaryById(id: number): Promise<Diary | null> {
    const { rows } = await client.query('SELECT * FROM diary WHERE id = $1', [id]);
    return rows[0] || null;
  }

  public async updateDiaryStatus(diaryId: number, status: DiaryStatus): Promise<void> {
    await client.query('UPDATE diary SET status = $1 WHERE id = $2', [status, diaryId]);
  }
}

// Export singleton instance
export const diaryService = new DiaryService();
