import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import DiaryRoute from '@routes/diary.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), DiaryRoute]);

app.listen();
