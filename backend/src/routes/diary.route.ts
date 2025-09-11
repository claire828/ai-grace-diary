import { DiaryController } from '@controllers/diary.controller';
import { Router } from 'express';

const router = Router();
const diaryController = new DiaryController();

// 建立日記
router.post('/diaries', diaryController.createDiary);
// 取得今天的日記
router.get('/diaries/today', diaryController.getTodayDiary);
// 編輯日記
router.put('/diaries/:id', diaryController.updateDiary);
// 刪除日記
router.delete('/diaries/:id', diaryController.deleteDiary);
// 取得所有日記
router.get('/diaries', diaryController.getAllDiaries);

export default { router };
