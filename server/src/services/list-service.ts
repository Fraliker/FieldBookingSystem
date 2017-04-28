import {Router, Request, Response, NextFunction} from 'express';
import ListModel from '../models/ListModel';
import DataAccess from '../data-access';

export class ListService {

    private ListModel: ListModel;
    public idGenerator:number;
    public constructor() {
        this.ListModel = new ListModel();
        this.idGenerator = 100;
    }

    public retrieveAllLists(response:any): any {
        var query = this.ListModel.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public createList(json):any {
        json.listId = this.idGenerator;
        this.ListModel.model.create([json], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        this.idGenerator++;
        return json.listId;
    }
 
}