"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class FieldModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
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
            sport: [{
                    sportName: String,
                    sportId: Number,
                }],
            fieldType: [{
                    fieldTypeName: String,
                    fieldTypeId: Number,
                }],
        }, { collection: 'fields' });
    }
    createModel() {
        this.model = mongooseConnection.model("Fields", this.schema);
    }
}
exports.default = FieldModel;

//# sourceMappingURL=FieldModel.js.map
