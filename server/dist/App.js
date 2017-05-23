"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const request_route_1 = require("./routes/request-route");
const field_route_1 = require("./routes/field-route");
const field_type_route_1 = require("./routes/field-type-route");
const sport_route_1 = require("./routes/sport-route");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.header('access-Control-Allow-Origin', '*');
            next();
        });
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use('/', express.static(__dirname + '/static_files'));
    }
    // Configure API endpoints.
    routes() {
        this.express.use(request_route_1.default);
        this.express.use(field_route_1.default);
        this.express.use(field_type_route_1.default);
        this.express.use(sport_route_1.default);
    }
}
exports.default = new App().express;

//# sourceMappingURL=App.js.map
