"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class TaskModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            listId: Number,
            tasks: [{
                    description: String,
                    taskId: Number,
                    shared: String,
                    status: String
                }]
        }, { collection: 'tasks' });
    }
    createModel() {
        this.model = mongooseConnection.model("Task", this.schema);
    }
}
exports.default = TaskModel;

//# sourceMappingURL=TaskModel.js.map
