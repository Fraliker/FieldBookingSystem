import {Router, Request, Response, NextFunction} from 'express';
var FieldTypeService = require('../services/fieldType-service');


export class FieldTypeRouter {
  public router: Router
  

  /**
   * Initialize the FieldTypeRouter
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
    
    this.router.get('/api/fieldType/', (req, res) => {
        FieldTypeService.retrieveAllFieldTypes(res);
    });
  }

}

// Create the FieldTypeRouter, and export its configured Express.Router
const FieldTypeRoutes = new FieldTypeRouter();
FieldTypeRoutes.init();

export default FieldTypeRoutes.router;