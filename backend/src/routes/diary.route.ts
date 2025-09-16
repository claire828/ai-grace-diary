import { DiaryController } from '@controllers/diary.controller';
import { Router } from 'express';

const router = Router();
const diaryController = new DiaryController();

router.post('/diaries', diaryController.createDiary);
router.get('/diaries/today', diaryController.getTodayDiary);
router.delete('/diaries/:id', diaryController.deleteDiary);
router.get('/diaries', diaryController.getAllDiaries);

export default { router };
