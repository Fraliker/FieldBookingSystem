import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IFieldModel from '../interfaces/IFieldModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class FieldModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
       this.schema =  mongoose.Schema(
           {
               fieldId: Number,
               admin: {
                   adminUserName: String,
                   adminId: Number,
                   organization: String,
                   phoneNo: String
               },
               fieldName: String,
               fieldHourlyPrice: Number,
               description: String,
               imageFileURL: String,
               address: {
                   number: String,
                   city: String,
                   state: String,
                   zip: String,
               },
               sport: [ {
                   sportName: String,
                   sportId: Number,
               }],
               fieldType: [ {
                   fieldTypeName: String,
                   fieldTypeId: Number,
               }],
           }, {collection: 'fields'}
       );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFieldModel>("Fields", this.schema);
    }
}