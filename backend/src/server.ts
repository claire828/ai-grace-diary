import { App } from '@/app';
import DiaryRoute from '@routes/diary.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([DiaryRoute]);

app.listen();
