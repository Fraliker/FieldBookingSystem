import {Router, Request, Response, NextFunction} from 'express';
import {SportService} from '../services/sport-service';


export class SportRouter {
  public router: Router
  private SportService: SportService;
  

  /**
   * Initialize the SportRouter
   */
  constructor() {
    this.router = Router();
    this.SportService = new SportService();
    
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/app/sport/', (req, res) => {
        this.SportService.retrieveAllSports(res);
    });
  }

}

// Create the SportRouter, and export its configured Express.Router
const SportRoutes = new SportRouter();
SportRoutes.init();

export default SportRoutes.router;