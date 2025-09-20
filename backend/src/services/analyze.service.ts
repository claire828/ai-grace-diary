import { client } from '@/database';
import type { DiaryAnalysis } from '@/models/analysis.model';
import type { DiaryInsight } from '@/models/insights.model';
import { diaryService } from './diary.service';
import { geminiService } from './gemini.service';

export class AnalyzeService {
  public async analyzeDiary(diaryId: number, content: string): Promise<DiaryAnalysis> {
    try {
      await diaryService.updateDiaryStatus(diaryId, 'analyzing');
      const result = await geminiService.analyzeDiary(content);

      console.log('===Analysis result:', result.text);
      const analysisData: DiaryAnalysis = JSON.parse(result.text);
      await this.saveDiaryAnalysis(diaryId, analysisData);
      await diaryService.updateDiaryStatus(diaryId, 'analyzed');
      return analysisData;
    } catch (err) {
      console.error('Error in analyzeDiary:', err);
      throw err;
    }
  }

  private async saveDiaryAnalysis(diaryId: number, analysis: DiaryAnalysis): Promise<void> {
    const query = `
      INSERT INTO diary_analysis (
        diary_id,
        stress_score,
        stress_explanation,
        emotion_category,
        emotion_words,
        emotion_intensity,
        gratitude,
        themes,
        positive_negative_ratio,
        summary,
        feedback,
        model_version
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id
    `;

    const values = [
      diaryId,
      analysis.stressLevel.score,
      analysis.stressLevel.explanation,
      analysis.emotionalState.category,
      analysis.emotionalState.moodWords,
      analysis.emotionalState.intensity,
      analysis.gratitude,
      analysis.themes,
      analysis.positiveNegativeRatio,
      analysis.summary,
      analysis.feedback,
      'gemini-1.5',
    ];

    try {
      const result = await client.query(query, values);
      console.log('Analysis saved to database with ID:', result.rows[0].id);
    } catch (error) {
      console.error('Error saving analysis to database:', error);
      throw error;
    }
  }

  public async getDiaryAnalysis(diaryId: number): Promise<DiaryAnalysis | null> {
    const query = `
      SELECT 
        stress_score,
        stress_explanation,
        emotion_category,
        emotion_words,
        emotion_intensity,
        gratitude,
        themes,
        positive_negative_ratio,
        summary,
        feedback
      FROM diary_analysis 
      WHERE diary_id = $1 
      ORDER BY created_at DESC 
      LIMIT 1
    `;

    try {
      const result = await client.query(query, [diaryId]);
      if (result.rows.length === 0) {
        return null;
      }
      const row = result.rows[0];
      const analysisData: DiaryAnalysis = {
        stressLevel: {
          score: row.stress_score,
          explanation: row.stress_explanation,
        },
        emotionalState: {
          category: row.emotion_category,
          moodWords: row.emotion_words,
          intensity: row.emotion_intensity,
        },
        gratitude: row.gratitude,
        themes: row.themes,
        positiveNegativeRatio: row.positive_negative_ratio,
        summary: row.summary,
        feedback: row.feedback,
      };

      return analysisData;
    } catch (error) {
      console.error('Error getting analysis from database:', error);
      throw error;
    }
  }

  public async deleteDiaryAnalysis(diaryId: number): Promise<void> {
    const query = 'DELETE FROM diary_analysis WHERE diary_id = $1';

    try {
      const result = await client.query(query, [diaryId]);
      console.log(`Deleted ${result.rowCount} analysis records for diary ID: ${diaryId}`);
    } catch (error) {
      console.error('Error deleting analysis from database:', error);
      throw error;
    }
  }

  public async getDiaryInsights(): Promise<DiaryInsight[]> {
    const query = `
      SELECT DATE(d.created_at) AS day,
             ROUND(AVG(a.stress_score), 2) AS avg_stress_score,
             COUNT(d.id) as diary_count,
             COUNT(a.id) as analysis_count
      From diary d 
      Left Join diary_analysis a 
        ON d.id = a.diary_id
      WHERE d.created_at >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(d.created_at)
      ORDER BY day
    `;

    try {
      const result = await client.query(query);
      console.log('===Insights chart data:', result.rows);

      const data: DiaryInsight[] = result.rows.map(row => ({
        day: row.day,
        avg_stress_score: row.avg_stress_score ? parseFloat(row.avg_stress_score) : null,
        diary_count: parseInt(row.diary_count),
        analysis_count: parseInt(row.analysis_count),
      }));

      return data;
    } catch (error) {
      console.error('Error getting insights chart data:', error);
      throw error;
    }
  }
}

export const analyzeService = new AnalyzeService();
