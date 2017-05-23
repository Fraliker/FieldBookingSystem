"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class ListModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            name: String,
            description: String,
            listId: Number,
            due: String,
            state: String,
            owner: String
        }, { collection: 'lists' });
    }
    createModel() {
        this.model = mongooseConnection.model("Lists", this.schema);
    }
}
exports.default = ListModel;

//# sourceMappingURL=ListModel.js.map
