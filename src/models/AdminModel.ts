import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IAdminModel from '../interfaces/IAdminModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class AdminModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                adminUserName: String,
                adminId: Number,
                organization: String,
                phoneNo: String,
            }, {collection: 'admins'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IAdminModel>("Admins", this.schema);
    }
}