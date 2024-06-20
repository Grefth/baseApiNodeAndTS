import express from 'express';
import http, { Server } from 'http';
import { API } from './interfaces';
import * as routes from './routes/index';


export class ExpressApi implements API {
  private router: express.Router;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.router = express.Router();

    this.router.get('/', routes.welcome);
    this.router.get('/health', routes.healthCheck);
    // aqui puedes agregar más rutas
  }

  public createServer = (): Server => {
    const expressApp: express.Application = express();

    expressApp.use('/', this.router);

    return http.createServer(expressApp);
  }
}