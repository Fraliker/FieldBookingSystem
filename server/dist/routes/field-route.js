"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url = require("url");
var FieldService = require('../services/field-service');
class FieldRouter {
    /**
     * Initialize the ListRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        // getting available fields
        // query parameters: date, time, city, state, duration
        this.router.get('/api/fields/', (req, res) => {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var date = query.date;
            var time = query.time;
            var city = query.city;
            var state = query.state;
            var duration = query.duration;
            var msg = 'search for ' + query.var1;
            FieldService.retrieveAvailableFields(res, date, time, city, state, duration);
            return res;
        });
        // posting new fields
        this.router.post('/api/fields/', (req, res) => {
            var jsonObj = req.body;
            var id = FieldService.addNewField(jsonObj);
        });
        // editing fields
        this.router.put('/api/fields/:fieldId', (req, res) => {
            var jsonObj = req.body;
            var id = FieldService.updateField(jsonObj);
        });
    }
}
exports.FieldRouter = FieldRouter;
// Create the ListRouter, and export its configured Express.Router
const fieldRoutes = new FieldRouter();
fieldRoutes.init();
exports.default = fieldRoutes.router;

//# sourceMappingURL=field-route.js.map
