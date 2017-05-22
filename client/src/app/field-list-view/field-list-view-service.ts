import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../core/rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { config } from 'assets/config';


@Injectable()
export class FieldListViewService {
    private WebApiUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.WebApiUrl = config.WebApiBaseUrl + '/fields';

    }

    getAvailableFields(date: Date, time: string, duration: number, city: string, state: string) {  
      return this.http.get(this.WebApiUrl + '/' + '?date=' + date + '&time=' + time + '&duration=' + duration + '&city=' + city + '&state=' + state)
                      .map((response: Response) => response.json())
                      .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status Code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }

}
