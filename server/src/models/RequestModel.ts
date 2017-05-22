import Mongoose = require('mongoose');
import DataAccess from '../data-access';
import IRequestModel from '../interfaces/IRequestModel';
import UserModel from '../models/UserModel';
import FieldModel from '../models/FieldModel';

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
                user: {
                    userName: String,
                    userId: Number,
                    firstName: String,
                    lastName: String,
                    phoneNo: String,
                    userEmail: String
                },
                field: {
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
                    }]
                },
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