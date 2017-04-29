import Mongoose = require("mongoose");

interface IRequestModel extends Mongoose.Document {
    requestId: number;
    userId: number;
    fieldId: number;
    duration: number;
    purpose: string;
    totalPrice: number;
    status: string;
    requestDateTime: Date;
    createdDateTime: Date;
    
}

export default IRequestModel;