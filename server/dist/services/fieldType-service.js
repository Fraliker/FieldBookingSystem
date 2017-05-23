"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldTypeModel_1 = require("../models/FieldTypeModel");
class FieldTypeService {
    constructor() {
        this.FieldTypeModel = new FieldTypeModel_1.default();
        this.idGenerator = 100;
    }
    retrieveAllFieldTypes(response) {
        // logic to retrieve available FieldTypes (mongo code)
        var query = this.FieldTypeModel.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.FieldTypeService = FieldTypeService;
module.exports = new FieldTypeService();

//# sourceMappingURL=fieldType-service.js.map
