import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../core/rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { config } from 'assets/config';


@Injectable()
export class ProductionDataReportService {
    private WebApiUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.WebApiUrl = config.WebApiBaseUrl + '/requests/admin';

    }

    getRequests(adminId) {
      
      return this.http.get(this.WebApiUrl + '/' + adminId)
                      .map((response: Response) => <any>response.json())
                      .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status Code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }

}
