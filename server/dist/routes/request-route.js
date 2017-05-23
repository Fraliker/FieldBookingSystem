"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url = require("url");
var RequestService = require('../services/request-service');
class RequestRouter {
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
        // getting all requests for admin
        this.router.get('/api/request/admin/:adminId', (req, res) => {
            var adminId = req.params.adminId;
            RequestService.retrieveRequests(res, adminId);
            return res;
        });
        // getting all requests for user
        this.router.get('/api/request/user/:userId', (req, res) => {
            var userId = req.params.userId;
            RequestService.retrieveUserRequests(res, userId);
            return res;
        });
        // getting details of a single request
        this.router.get('/api/request/details', (req, res) => {
            var urlParts = url.parse(req.url, true);
            RequestService.retrieveRequestDetails(res, { requestId: urlParts.query.requestId });
            return res;
        });
        // getting all requests for one field
        this.router.get('/api/request/field/:fieldId', (req, res) => {
            var fieldId = req.params.fieldId;
            RequestService.retrieveRequests(res, fieldId);
            return res;
        });
        // adding a new field request
        this.router.post('/api/request/:userId', (req, res) => {
            var userId = req.params.userId;
            var jsonObj = req.body;
            RequestService.addRequest(res, jsonObj);
            return res;
        });
        // updating an existing field request
        this.router.put('/api/request/:requestId', (req, res) => {
            var requestId = req.params.requestId;
            var jsonObj = req.body;
            var id = RequestService.addRequest(jsonObj);
        });
    }
}
exports.RequestRouter = RequestRouter;
// Create the RequestRouter, and export its configured Express.Router
const requestRoutes = new RequestRouter();
requestRoutes.init();
exports.default = requestRoutes.router;

//# sourceMappingURL=request-route.js.map
