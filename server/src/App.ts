import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import HeroRouter from './routes/hero-route';
import ListRouter from './routes/list-route';
import TaskRouter from './routes/task-route';

import RequestRouter from './routes/request-route';
import FieldRouter from './routes/field-route';
import FieldTypeRouter from './routes/field-type-route';
import SportRouter from './routes/sport-route';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    
    this.express.use(HeroRouter);
    this.express.use(ListRouter);
    this.express.use(TaskRouter);
    
    this.express.use(RequestRouter);
    this.express.use(FieldRouter);
    this.express.use(FieldTypeRouter);
    this.express.use(SportRouter);

  }

}

export default new App().express;