import { CREDENTIALS, LOG_FORMAT, NODE_ENV, ORIGIN, PORT } from '@config';
import { Routes } from '@interfaces/routes.interface';
import { ErrorMiddleware } from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import 'reflect-metadata';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT, { stream })); // HTTP 請求日誌記錄，使用 morgan 中介軟體，根據 LOG_FORMAT 設定日誌格式，並將日誌輸出到指定的 stream。
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS })); // 啟用 CORS（Cross-Origin Resource Sharing），允許來自指定來源的跨域請求，並根據 CREDENTIALS 設定是否允許攜帶憑證（如 cookies）。
    this.app.use(hpp()); // 防止 HTTP 參數汙染攻擊（HTTP Parameter Pollution），避免惡意重複參數導致安全漏洞。
    this.app.use(helmet()); // 設定多種 HTTP 標頭，提升安全性（如防止 XSS、點擊劫持等）。
    this.app.use(compression()); // 啟用 gzip 壓縮，減少回應內容大小，加快傳輸速度。
    this.app.use(express.json()); //解析 JSON 格式的請求主體（body），讓你能用 req.body 取得 JSON 資料。
    this.app.use(express.urlencoded({ extended: true })); // 解析 URL 編碼的請求主體（body），讓你能用 req.body 取得表單資料。
    this.app.use(cookieParser()); // 解析 Cookie，讓你能用 req.cookies 取得 Cookie 資料。
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
