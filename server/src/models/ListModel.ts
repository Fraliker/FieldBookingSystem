import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IListModel from '../interfaces/IListModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class ListModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                name: String,
                description: String,
                listId: Number,
                due: String,
                state: String,
                owner: String
            }, {collection: 'lists'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IListModel>("Lists", this.schema);
    }
}