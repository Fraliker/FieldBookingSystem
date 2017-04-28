import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import ITaskModel from '../interfaces/ITaskModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class TaskModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                listId: Number,
                tasks: [ {
                description: String,
                taskId: Number,
                shared: String,
                status: String
                }]
            }, {collection: 'tasks'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITaskModel>("Task", this.schema);
    }
    
    

}