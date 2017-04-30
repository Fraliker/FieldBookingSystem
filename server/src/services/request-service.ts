import {Router, Request, Response, NextFunction} from 'express';
import FieldModel from '../models/FieldModel';
import RequestModel from '../models/RequestModel';
import SportModel from '../models/SportModel';
import FieldTypeModel from '../models/FieldTypeModel';
import UserModel from '../models/UserModel';
import DataAccess from '../data-access';

export class RequestService {

    private RequestModel: RequestModel;
    public idGenerator:number;
    
    public constructor() {
        this.RequestModel = new RequestModel();
        this.idGenerator = 100;
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


    public addRequest(jsonObj): any {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model.find({});
        query.exec( (err, itemArray) => {
            
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