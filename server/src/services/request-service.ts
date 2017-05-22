import {Router, Request, Response, NextFunction} from 'express';
import FieldModel from '../models/FieldModel';
import RequestModel from '../models/RequestModel';


export class RequestService {

    private RequestModel: RequestModel;
    public idGenerator:number;

    public constructor() {
        this.RequestModel = new RequestModel();
        this.idGenerator = 0;
    }

    public retrieveRequests(response:any, adminId: number): any {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model
                        .find({'field.admin.adminId': adminId})
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveAllRequests(response: any) : any {
        var query = this.RequestModel.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveRequestDetails(response: any, filter:Object) {
        var query = this.RequestModel.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveUserRequests(response:any, userId: number): any {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model
                        .find({'user.userId': userId})
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }


    public addRequest(response:any, jsonObj): any {

        var query = this.RequestModel.model.find().sort({requestId:-1}).limit(1);
        query.exec(function(err, itemArray) {
            if (err || !itemArray.length) {
                console.log('there was a problem');
            }
        }).then(item => {
            jsonObj.requestId = <number>item[0]._doc.requestId + 1;
            jsonObj.createdDateTime = new Date().toISOString();
            this.RequestModel.model.create([jsonObj], (err) => {
                console.log(jsonObj);
                if (err) {
                    console.log('object creation failed');
                } else {
                    response.json(jsonObj);
                }
            })
        });
    }

    public updateRequest(jsonObj): any {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model.find({});
        query.exec( (err, itemArray) => {
        });
    }

    public setRequestStatus(status: string) {

    }
}
module.exports = new RequestService();