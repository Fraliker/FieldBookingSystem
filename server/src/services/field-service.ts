import {Router, Request, Response, NextFunction} from 'express';
import FieldModel from '../models/FieldModel';
import DataAccess from '../data-access';


export class FieldService {

    private FieldModel: FieldModel;
    public idGenerator:number;
    
    public constructor() {
        this.FieldModel = new FieldModel();
        this.idGenerator = 100;
    }

    public retrieveAvailableFields(response:any, date, time, location, duration): any {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public addNewField(jsonObj): any {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({});
        query.exec( (err, itemArray) => {
            
        });
    }

    public updateField(jsonObj): any {
        // logic to retrieve available fields (mongo code)
        var query = this.FieldModel.model.find({});
        query.exec( (err, itemArray) => {
            
        });
    }
}

module.exports = new FieldService();

