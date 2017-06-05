import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userName: string;
    userId: Number;
    firstName: string;
    lastName: string;
    phoneNo: string;
    userEmail: string;
}
export default IUserModel;