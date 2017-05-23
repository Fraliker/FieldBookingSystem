"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var FieldTypeService = require('../services/fieldType-service');
class FieldTypeRouter {
    /**
     * Initialize the FieldTypeRouter
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
        this.router.get('/api/fieldType/', (req, res) => {
            FieldTypeService.retrieveAllFieldTypes(res);
        });
    }
}
exports.FieldTypeRouter = FieldTypeRouter;
// Create the FieldTypeRouter, and export its configured Express.Router
const FieldTypeRoutes = new FieldTypeRouter();
FieldTypeRoutes.init();
exports.default = FieldTypeRoutes.router;

//# sourceMappingURL=field-type-route.js.map
