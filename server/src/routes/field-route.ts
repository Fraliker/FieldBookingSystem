import {Router, Request, Response, NextFunction} from 'express';
import {FieldService} from '../services/field-service';
import * as url from 'url';


export class FieldRouter {
  public router: Router
  private FieldService: FieldService;
  

  /**
   * Initialize the ListRouter
   */
  constructor() {
    this.router = Router();
    this.FieldService = new FieldService();
    
    this.init();
  }


  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    
    // getting available fields
    this.router.get('/api/fields/', (req, res) => {
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        
        var date = query.date;
        var time = query.time;
        var location = query.location;
        var duration = query.duration; 

        var msg = 'search for ' + query.var1;
        this.FieldService.retrieveAvailableFields(res, date, time, location, duration);

        return res;
    });

    // posting new fields
    this.router.post('/api/fields/', (req, res) => {  
        var jsonObj = req.body;
        var id = this.FieldService.addNewField(jsonObj);
    });

    // editing fields
    this.router.put('/api/fields/', (req, res) => {  
        var jsonObj = req.body;
        var id = this.FieldService.updateField(jsonObj);
    });
    
    
  }

}

// Create the ListRouter, and export its configured Express.Router
const fieldRoutes = new FieldRouter();
fieldRoutes.init();

export default fieldRoutes.router;