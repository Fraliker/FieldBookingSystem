import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userName: string;
    userId: number;
    firstName: string;
    lastName: string;
    phoneNo: string;
}
export default IUserModel;