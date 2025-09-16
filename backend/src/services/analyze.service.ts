import { Inject, Service } from 'typedi';
import { DiaryService } from './diary.service';

@Service()
export class AnalyzeService {
  @Inject(() => DiaryService)
  private diaryService: DiaryService;
  // @Inject(() => GeminiService)
  // private geminiService: GeminiService;

  public async analyzeDiary(diaryId: number, content: string): Promise<void> {
    try {
      //this.diaryService.updateDiaryStatus(diaryId, 'analyzing');
      // this.geminiService.analyzeDiary(content);
      console.log(`Analyzing diary with ID: ${diaryId}, ${content}`);
    } catch (err) {
      console.error('Error in analyzeDiary:', err);
    }
  }
}
