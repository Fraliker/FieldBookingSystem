"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class AdminModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            adminUserName: String,
            adminId: Number,
            organization: String,
            phoneNo: String,
        }, { collection: 'admins' });
    }
    createModel() {
        this.model = mongooseConnection.model("Admins", this.schema);
    }
}
exports.default = AdminModel;

//# sourceMappingURL=AdminModel.js.map
