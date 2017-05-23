"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var SportService = require('../services/sport-service');
class SportRouter {
    /**
     * Initialize the SportRouter
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
        this.router.get('/api/sport/', (req, res) => {
            SportService.retrieveAllSports(res);
        });
    }
}
exports.SportRouter = SportRouter;
// Create the SportRouter, and export its configured Express.Router
const SportRoutes = new SportRouter();
SportRoutes.init();
exports.default = SportRoutes.router;

//# sourceMappingURL=sport-route.js.map
