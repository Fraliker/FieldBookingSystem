"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class UserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            userName: String,
            userId: Number,
            firstName: String,
            lastName: String,
            phoneNo: String,
            userEmail: String
        }, { collection: 'users' });
    }
    createModel() {
        this.model = mongooseConnection.model("Users", this.schema);
    }
}
exports.default = UserModel;

//# sourceMappingURL=UserModel.js.map
