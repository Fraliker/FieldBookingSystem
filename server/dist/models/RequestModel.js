"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_access_1 = require("../data-access");
var mongoose = data_access_1.default.mongooseInstance;
var mongooseConnection = data_access_1.default.mongooseConnection;
class RequestModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            requestId: Number,
            user: {
                userName: String,
                userId: Number,
                firstName: String,
                lastName: String,
                phoneNo: String,
                userEmail: String
            },
            field: {
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
                    }]
            },
            duration: Number,
            purpose: String,
            totalPrice: Number,
            status: String,
            requestDateTime: Date,
            createdDateTime: Date,
        }, { collection: 'requests' });
    }
    createModel() {
        this.model = mongooseConnection.model("Requests", this.schema);
    }
}
exports.default = RequestModel;

//# sourceMappingURL=RequestModel.js.map
