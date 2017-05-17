import Mongoose = require("mongoose");

interface IRequestModel extends Mongoose.Document {
    requestId: number;
    user:{
        userName: string;
        userId: number;
        firstName: string;
        lastName: string;
        phoneNo: string;
    };
    field: {
        fieldId: number;
        admin: {
            adminUserName: string;
            adminId: number;
            organization: string;
            phoneNo: string;
        },
        fieldName: string;
        fieldHourlyPrice: number;
        description: string;
        imageFileURL: string;
        address: string;
        sport: [ {
            sportName: string;
            sportId: number;
        }];
        fieldType: [ {
            fieldTypeName: string;
            fieldTypeId: number;
        }];
    };
    duration: number;
    purpose: string;
    totalPrice: number;
    status: string;
    requestDateTime: Date;
    createdDateTime: Date;
}

export default IRequestModel;