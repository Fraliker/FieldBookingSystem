import {Router, Request, Response, NextFunction} from 'express';
import TaskModel from '../models/TaskModel';
import DataAccess from '../data-access';

export class TaskService {

    private TaskModel: TaskModel;
    public constructor() {
        this.TaskModel = new TaskModel();
    }

    public retrieveTasksDetails(response:any, filter:Object) {
        var query = this.TaskModel.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveTasksCount(response:any, filter:Object) {
        var query = this.TaskModel.model.find(filter).select('tasks').count();
        query.exec( (err, numberOfTasks) => {
            console.log('number of tasks: ' + numberOfTasks);
            response.json(numberOfTasks);
        });
    }
 
}