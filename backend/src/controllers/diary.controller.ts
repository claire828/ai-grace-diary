import { DiaryService } from '@services/diary.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class DiaryController {
  public diaryService = Container.get(DiaryService);

  public createDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { content } = req.body;
      const diary = await this.diaryService.createDiary(content);
      res.status(201).json({ data: diary, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getTodayDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diary = await this.diaryService.getTodayDiary();
      res.status(200).json({ data: diary, message: 'today' });
    } catch (error) {
      next(error);
    }
  };

  public getAllDiaries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diaries = await this.diaryService.getAllDiaries();
      res.status(200).json({ data: diaries, message: 'all diaries' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDiary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const diaryId = Number(req.params.id);
      await this.diaryService.deleteDiary(diaryId);
      res.status(200).json({ message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
