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

    private save(id) {
        this.idGenerator = id;
        console.log(this.idGenerator);
    }

    private getMaxId() :any {
        var query = this.RequestModel.model.find().sort({requestId:-1}).limit(1);     
        query.exec(function(err, itemArray){
            this.save(<number>itemArray[0]._doc.requestId);
        });
    }

    public retrieveRequestDetails(response: any, filter:Object) {
        var query = this.RequestModel.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    //service
    public retrieveUserRequests(response:any, userId: number): any {
        // logic to retrieve available Requests (mongo code)
        var query = this.RequestModel.model
                        .find({'user.userId': userId})
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }


    public addRequest(jsonObj): any {

        this.getMaxId();

        /*
        // logic to retrieve available Requests (mongo code)
        this.RequestModel.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });*/
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