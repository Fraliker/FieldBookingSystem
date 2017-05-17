import {Router, Request, Response, NextFunction} from 'express';
var SportService = require('../services/sport-service');

export class SportRouter {
  public router: Router
  

  /**
   * Initialize the SportRouter
   */
  constructor() {
    this.router = Router();    
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/api/sport/', (req, res) => {
        SportService.retrieveAllSports(res);
    });
  }

}

// Create the SportRouter, and export its configured Express.Router
const SportRoutes = new SportRouter();
SportRoutes.init();

export default SportRoutes.router;