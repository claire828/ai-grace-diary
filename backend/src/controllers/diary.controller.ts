import { analyzeService } from '@/services/analyze.service';
import { diaryService } from '@services/diary.service';
import { NextFunction, Request, Response } from 'express';

export class DiaryController {
  public createDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { content } = req.body;
      const diary = await diaryService.createDiary(content);
      res.status(201).json({ data: diary, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getTodayDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diary = await diaryService.getTodayDiary();
      res.status(200).json({ data: diary, message: 'today' });
    } catch (error) {
      next(error);
    }
  };

  public getAllDiaries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diaries = await diaryService.getAllDiaries();
      res.status(200).json({ data: diaries, message: 'all diaries' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diaryId = Number(req.params.id);
      await diaryService.deleteDiary(diaryId);
      res.status(200).json({ message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  analyzeDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diaryId = Number(req.params.id);
      const diary = await diaryService.getDiaryById(diaryId);
      if (!diary) {
        res.status(404).json({ error: 'Diary not found' });
        return;
      }
      // res.status(200).json({ message: 'analyzing' });
      const result = await analyzeService.analyzeDiary(diaryId, diary.content);
      res.status(200).json({ message: 'analyzing', result });
    } catch (error) {
      next(error);
    }
  };
}
