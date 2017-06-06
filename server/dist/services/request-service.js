"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestModel_1 = require("../models/RequestModel");
var MailerService = require('../services/mailer-service');
class RequestService {
    constructor() {
        this.RequestModel = new RequestModel_1.default();
        this.idGenerator = 0;
    }
    retrieveRequests(response, adminId) {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model
            .find({ 'field.admin.adminId': adminId });
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveAllRequests(response) {
        var query = this.RequestModel.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveRequestDetails(response, filter) {
        var query = this.RequestModel.model.findOne(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveUserRequests(response, userId) {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model
            .find({ 'user.userId': userId });
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    addRequest(response, jsonObj) {
        var query = this.RequestModel.model.find().sort({ requestId: -1 }).limit(1);
        query.exec(function (err, itemArray) {
            if (err || !itemArray.length) {
                console.log('there was a problem');
            }
        }).then(item => {
            jsonObj.requestId = item[0]._doc.requestId + 1;
            jsonObj.createdDateTime = new Date().toISOString();
            this.RequestModel.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
                else {
                    MailerService.sendEmail(response, jsonObj);
                    response.json(jsonObj);
                }
            });
        });
    }
    setRequestStatus(response, jsonObj) {
        this.RequestModel.model.update({ 'requestId': jsonObj.requestId }, { 'status': jsonObj.status }, { multi: true }, function (err, numEffected) {
            response.send(numEffected);
        });
    }
}
exports.RequestService = RequestService;
module.exports = new RequestService();

//# sourceMappingURL=request-service.js.map
