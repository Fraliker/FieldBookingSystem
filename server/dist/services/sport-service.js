"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportModel_1 = require("../models/SportModel");
class SportService {
    constructor() {
        this.SportModel = new SportModel_1.default();
        this.idGenerator = 100;
    }
    retrieveAllSports(response) {
        // logic to retrieve available Sports (mongo code)
        var query = this.SportModel.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.SportService = SportService;
module.exports = new SportService();

//# sourceMappingURL=sport-service.js.map
