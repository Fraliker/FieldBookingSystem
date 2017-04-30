import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IFieldTypeModel from '../interfaces/IFieldTypeModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class FieldTypeModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                fieldTypeName: String,
                fieldTypeId: Number
            }, {collection: 'fieldTypes'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFieldTypeModel>("FieldTypes", this.schema);
    }
}