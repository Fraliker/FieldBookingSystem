import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

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
    this.express.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header('access-Control-Allow-Origin', '*');
      next();
    });

    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use('/', express.static(__dirname+'/static_files'));


  }

  // Configure API endpoints.
  private routes(): void {
    
    this.express.use(RequestRouter);
    this.express.use(FieldRouter);
    this.express.use(FieldTypeRouter);
    this.express.use(SportRouter);

  }

}

export default new App().express;