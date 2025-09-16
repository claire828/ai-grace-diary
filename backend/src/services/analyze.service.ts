import { geminiService } from './gemini.service';

export class AnalyzeService {
  public async analyzeDiary(diaryId: number, content: string): Promise<void> {
    try {
      // await diaryService.updateDiaryStatus(diaryId, 'analyzing');
      geminiService.analyzeDiary(content);
      console.log(`Analyzing diary with ID: ${diaryId}, ${content}`);
    } catch (err) {
      console.error('Error in analyzeDiary:', err);
    }
  }
}

// Export singleton instance
export const analyzeService = new AnalyzeService();
