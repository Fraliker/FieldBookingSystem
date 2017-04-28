import Mongoose = require("mongoose");

interface IFieldModel extends Mongoose.Document {
    fieldId: number;
    adminId: number
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
}

export default IFieldModel;