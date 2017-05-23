"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var TaskService = require('../services/task-service');
class TaskRouter {
    /**
     * Initialize the TaskRouter
     */
    constructor() {
        this.router = express_1.Router();
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
            TaskService.retrieveTasksCount(res, { listId: id });
        });
        this.router.get('/app/list/:listId/count', (req, res) => {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            TaskService.retrieveTasksCount(res, { listId: id });
        });
        this.router.get('/app/list/:listId', (req, res) => {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            TaskService.retrieveTasksDetails(res, { listId: id });
        });
    }
}
exports.TaskRouter = TaskRouter;
// Create the ListRouter, and export its configured Express.Router
const taskRoutes = new TaskRouter();
taskRoutes.init();
exports.default = taskRoutes.router;

//# sourceMappingURL=task-route.js.map
