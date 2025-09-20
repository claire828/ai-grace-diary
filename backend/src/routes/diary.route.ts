import { DiaryController } from '@controllers/diary.controller';
import { Router } from 'express';

const router: Router = Router();
const diaryController = new DiaryController();

router.post('/diaries', diaryController.createDiary);
router.get('/diaries', diaryController.getAllDiaries);
router.get('/diaries/insights', diaryController.getDiaryInsights);
router.get('/diaries/:id', diaryController.getDiaryById);
router.delete('/diaries/:id', diaryController.deleteDiary);
router.post('/diaries/:id/analyze', diaryController.analyzeDiary);
router.get('/diaries/:id/analysis', diaryController.getDiaryAnalysis);

export default { router };
