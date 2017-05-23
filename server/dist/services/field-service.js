"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldModel_1 = require("../models/FieldModel");
var RequestService = require('../services/request-service');
class FieldService {
    constructor() {
        this.FieldModel = new FieldModel_1.default();
        this.idGenerator = 100;
    }
    retrieveAvailableFields(response, date, time, city, state, duration) {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({ 'address.city': city, 'address.state': state });
        query.exec((err, itemArray) => {
            /*for (let fields of itemArray){
                var res;
                RequestService.retrieveFieldRequests(res,fields.fieldId)
            };*/
            response.json(itemArray);
        });
    }
    addNewField(jsonObj) {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({});
        query.exec((err, itemArray) => {
        });
    }
    updateField(jsonObj) {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({});
        query.exec((err, itemArray) => {
        });
    }
}
exports.FieldService = FieldService;
module.exports = new FieldService();

//# sourceMappingURL=field-service.js.map
