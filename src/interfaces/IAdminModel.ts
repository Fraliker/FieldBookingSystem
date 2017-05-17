import Mongoose = require("mongoose");

interface IAdminModel extends Mongoose.Document {
    adminUserName: string;
    adminId: number;
    organization: string;
    phoneNo: string;
}
export default IAdminModel;