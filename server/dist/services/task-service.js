"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskModel_1 = require("../models/TaskModel");
class TaskService {
    constructor() {
        this.TaskModel = new TaskModel_1.default();
    }
    retrieveTasksDetails(response, filter) {
        var query = this.TaskModel.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveTasksCount(response, filter) {
        var query = this.TaskModel.model.find(filter).select('tasks').count();
        query.exec((err, numberOfTasks) => {
            console.log('number of tasks: ' + numberOfTasks);
            response.json(numberOfTasks);
        });
    }
}
exports.TaskService = TaskService;
module.exports = new TaskService();

//# sourceMappingURL=task-service.js.map
