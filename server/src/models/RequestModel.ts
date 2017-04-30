import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IRequestModel from '../interfaces/IRequestModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class RequestModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                requestId: Number,
                userId: Number,
                fieldId: Number,
                duration: Number,
                purpose: String,
                totalPrice: Number,
                status: String,
                requestDateTime: Date,
                createdDateTime: Date,
            }, {collection: 'requests'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRequestModel>("Requests", this.schema);
    }
}