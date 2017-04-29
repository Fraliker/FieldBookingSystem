import {Router, Request, Response, NextFunction} from 'express';
import {FieldTypeService} from '../services/fieldType-service';


export class FieldTypeRouter {
  public router: Router
  private FieldTypeService: FieldTypeService;
  

  /**
   * Initialize the FieldTypeRouter
   */
  constructor() {
    this.router = Router();
    this.FieldTypeService = new FieldTypeService();
    
    this.init();
  }

  

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    
    this.router.get('/app/fieldType/', (req, res) => {
        this.FieldTypeService.retrieveAllFieldTypes(res);
    });
  }

}

// Create the FieldTypeRouter, and export its configured Express.Router
const FieldTypeRoutes = new FieldTypeRouter();
FieldTypeRoutes.init();

export default FieldTypeRoutes.router;