"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListModel_1 = require("../models/ListModel");
class ListService {
    constructor() {
        this.ListModel = new ListModel_1.default();
        this.idGenerator = 100;
    }
    retrieveAllLists(response) {
        var query = this.ListModel.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    createList(json) {
        json.listId = this.idGenerator;
        this.ListModel.model.create([json], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        this.idGenerator++;
        return json.listId;
    }
}
exports.ListService = ListService;
module.exports = new ListService();

//# sourceMappingURL=list-service.js.map
