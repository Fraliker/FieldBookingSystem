import {Router, Request, Response, NextFunction} from 'express';
import * as url from 'url';
var FieldService = require('../services/field-service');

export class FieldRouter {
  public router: Router
  

  /**
   * Initialize the ListRouter
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
    
    // getting available fields
    this.router.get('/api/fields/', (req, res) => {
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        
        var date = query.date;
        var time = query.time;
        var location = query.location;
        var duration = query.duration; 

        var msg = 'search for ' + query.var1;
        FieldService.retrieveAvailableFields(res, date, time, location, duration);

        return res;
    });

    // posting new fields
    this.router.post('/api/fields/', (req, res) => {  
        var jsonObj = req.body;
        var id = FieldService.addNewField(jsonObj);
    });

    // editing fields
    this.router.put('/api/fields/', (req, res) => {  
        var jsonObj = req.body;
        var id = FieldService.updateField(jsonObj);
    });  
  }

}

// Create the ListRouter, and export its configured Express.Router
const fieldRoutes = new FieldRouter();
fieldRoutes.init();

export default fieldRoutes.router;