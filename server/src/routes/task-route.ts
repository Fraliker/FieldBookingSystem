import {Router, Request, Response, NextFunction} from 'express';
var TaskService = require('../services/task-service');

export class TaskRouter {
  public router: Router

  /**
   * Initialize the TaskRouter
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
    this.router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        TaskService.retrieveTasksCount(res, {listId: id});
    });


    this.router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        TaskService.retrieveTasksCount(res, {listId: id});
    });

    this.router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        TaskService.retrieveTasksDetails(res, {listId: id});
    });
  }

}

// Create the ListRouter, and export its configured Express.Router
const taskRoutes = new TaskRouter();
taskRoutes.init();

export default taskRoutes.router;