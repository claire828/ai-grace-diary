import { geminiService } from './gemini.service';

export class AnalyzeService {
  public async analyzeDiary(diaryId: number, content: string): Promise<string> {
    try {
      // await diaryService.updateDiaryStatus(diaryId, 'analyzing');
      const result = await geminiService.analyzeDiary(content);
      console.log('===Analysis result:', result.text);
      return result.text;
    } catch (err) {
      console.error('Error in analyzeDiary:', err);
    }
  }
}

// Export singleton instance
export const analyzeService = new AnalyzeService();
