import {Router, Request, Response, NextFunction} from 'express';
import * as url from 'url';
var RequestService = require('../services/request-service');




export class RequestRouter {
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
    
    // getting all requests
    this.router.get('/api/request', (req, res) => {
        RequestService.retrieveAllRequests(res);
        return res;
    });

    // getting all requests for admin
    this.router.get('/api/request/:adminId', (req, res) => {
        var adminId = req.params.adminId;
        RequestService.retrieveRequests(res, adminId);
        return res;
    });

    // getting user request
    this.router.get('/api/request/user/:userId', (req, res) => {
        var userId = req.params.userId;
        RequestService.retrieveUserRequests(res, userId);
        return res;
    });

    // getting details of a single request
    this.router.get('/api/request/details', (req, res) => {
        var urlParts = url.parse(req.url, true);
        RequestService.retrieveRequestDetails(res, {requestId: urlParts.query.requestId});
        return res;
    });

    // adding a new field request
    this.router.post('/api/request/:userId', (req, res) => {  
        var jsonObj = req.body;
        var id = RequestService.addRequest(jsonObj);
    });

    // updating an existing field request
    this.router.put('/api/request/:requestId', (req, res) => {  
        var requestId = req.params.requestId;
        var jsonObj = req.body;
        var id = RequestService.addRequest(jsonObj);
    });

// getting all requests for one field
   this.router.get('/api/request/:fieldId', (req, res) => {
       var fieldId = req.params.fieldId;
       RequestService.retrieveRequests(res, fieldId);
       return res;
   });
  }

}

// Create the RequestRouter, and export its configured Express.Router
const requestRoutes = new RequestRouter();
requestRoutes.init();

export default requestRoutes.router;