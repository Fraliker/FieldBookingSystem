"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class FieldTypeModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            fieldTypeName: String,
            fieldTypeId: Number
        }, { collection: 'fieldTypes' });
    }
    createModel() {
        this.model = mongooseConnection.model("FieldTypes", this.schema);
    }
}
exports.default = FieldTypeModel;

//# sourceMappingURL=FieldTypeModel.js.map
