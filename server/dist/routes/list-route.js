"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var ListService = require('../services/fieldType-service');
class ListRouter {
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
        this.router.get('/app/list/', (req, res) => {
            ListService.retrieveAllLists(res);
        });
        this.router.post('/app/list/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            var id = ListService.createList(jsonObj);
            res.send(id.toString());
        });
    }
}
exports.ListRouter = ListRouter;
// Create the ListRouter, and export its configured Express.Router
const listRoutes = new ListRouter();
listRoutes.init();
exports.default = listRoutes.router;

//# sourceMappingURL=list-route.js.map
