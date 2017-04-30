import {Router, Request, Response, NextFunction} from 'express';
import {ListService} from '../services/list-service';


export class ListRouter {
  public router: Router
  private ListService: ListService;
  

  /**
   * Initialize the ListRouter
   */
  constructor() {
    this.router = Router();
    this.ListService = new ListService();
    
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/app/list/', (req, res) => {
        this.ListService.retrieveAllLists(res);
    });

    this.router.post('/app/list/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        var id = this.ListService.createList(jsonObj);        
        res.send(id.toString());
    });
    
  }

}

// Create the ListRouter, and export its configured Express.Router
const listRoutes = new ListRouter();
listRoutes.init();

export default listRoutes.router;