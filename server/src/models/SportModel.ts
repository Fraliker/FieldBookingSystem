import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import ISportModel from '../interfaces/ISportModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class SportModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                sportName: String,
                sportId: Number,
            }, {collection: 'sports'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISportModel>("Sports", this.schema);
    }
}