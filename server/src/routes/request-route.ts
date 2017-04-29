import {Router, Request, Response, NextFunction} from 'express';
import {RequestService} from '../services/request-service';
import * as url from 'url';


export class RequestRouter {
  public router: Router
  private RequestService: RequestService;
  

  /**
   * Initialize the ListRouter
   */
  constructor() {
    this.router = Router();
    this.RequestService = new RequestService();
    
    this.init();
  }


  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    
    // getting all requests
    this.router.get('/api/request/', (req, res) => {
        this.RequestService.retrieveAvailableRequests(res);
        return res;
    });

   
    
    
  }

}

// Create the ListRouter, and export its configured Express.Router
const requestRoutes = new RequestRouter();
requestRoutes.init();

export default requestRoutes.router;