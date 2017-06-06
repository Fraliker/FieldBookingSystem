"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const url = require("url");
const bodyParser = require("body-parser");
const session = require("express-session");
// services
var FieldService = require('./services/field-service');
var FieldTypeService = require('./services/fieldType-service');
var RequestService = require('./services/request-service');
var SportService = require('./services/sport-service');
// SSO
const FacebookPassport_1 = require("./sso-config/FacebookPassport");
let passport = require('passport');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.facebookPassportObj = new FacebookPassport_1.default();
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        /*this.express.use(function (req, res, next) {
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          res.header('access-Control-Allow-Origin', '*');
          next();
        });*/
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(session({ secret: 'keyboard cat' }));
        this.express.use(passport.initialize());
        this.express.use(passport.session());
    }
    validateAuth(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.send(req.user);
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
        router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
            let options = {
                maxAge: 1000 * 60 * 60 * 24,
                signed: false // Indicates if the cookie should be signed
            };
            // Set cookie
            res.cookie('User', passport.session.user, options); // options is optional
            res.redirect('/#/home');
        });
        // Field Routes
        // getting available fields
        // query parameters: date, time, city, state, duration
        router.get('/api/fields/', (req, res) => {
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
        router.post('/api/fields/', (req, res) => {
            var jsonObj = req.body;
            var id = FieldService.addNewField(jsonObj);
        });
        // editing fields
        router.put('/api/fields/:fieldId', (req, res) => {
            var jsonObj = req.body;
            var id = FieldService.updateField(jsonObj);
        });
        // Request Routes
        // getting all requests for admin
        router.get('/api/request/admin/:adminId', (req, res) => {
            var adminId = req.params.adminId;
            RequestService.retrieveRequests(res, adminId);
            return res;
        });
        // getting all requests for user
        router.get('/api/request/user/:userId', (req, res) => {
            var userId = req.params.userId;
            RequestService.retrieveUserRequests(res, userId);
            return res;
        });
        // getting details of a single request
        router.get('/api/request/details', (req, res) => {
            var urlParts = url.parse(req.url, true);
            RequestService.retrieveRequestDetails(res, { requestId: urlParts.query.requestId });
            return res;
        });
        // getting all requests for one field
        router.get('/api/request/field/:fieldId', (req, res) => {
            var fieldId = req.params.fieldId;
            RequestService.retrieveRequests(res, fieldId);
            return res;
        });
        // adding a new field request
        router.post('/api/request/:userId', (req, res) => {
            var userId = req.params.userId;
            var jsonObj = req.body;
            RequestService.addRequest(res, jsonObj);
            return res;
        });
        // updating request status
        router.put('/api/request', (req, res) => {
            var jsonObj = req.body;
            var id = RequestService.setRequestStatus(res, jsonObj);
            return res;
        });
        // Field Type Routes
        // Get field types
        router.get('/api/fieldType/', (req, res) => {
            FieldTypeService.retrieveAllFieldTypes(res);
        });
        // Sport Routes
        // Get Sport types
        router.get('/api/sport/', (req, res) => {
            SportService.retrieveAllSports(res);
        });
        this.express.use('/', express.static(__dirname + '/static_files'));
        this.express.use('/', router);
    }
}
exports.default = new App().express;

//# sourceMappingURL=App.js.map
