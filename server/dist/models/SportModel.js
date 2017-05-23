"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class SportModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            sportName: String,
            sportId: Number,
        }, { collection: 'sports' });
    }
    createModel() {
        this.model = mongooseConnection.model("Sports", this.schema);
    }
}
exports.default = SportModel;

//# sourceMappingURL=SportModel.js.map
