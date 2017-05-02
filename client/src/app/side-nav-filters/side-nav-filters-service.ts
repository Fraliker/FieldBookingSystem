import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../core/rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { config } from 'assets/config';


@Injectable()
export class SideNavFiltersService {
    private WebApiUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.WebApiUrl = config.WebApiBaseUrl;

    }

    getFieldTypes() {  
      return this.http.get(this.WebApiUrl + '/sport')
                      .map((response: Response) => response.json())
                      .catch(this.handleError);
    }

    getSports() {  
      return this.http.get(this.WebApiUrl + '/fieldType')
                      .map((response: Response) => response.json())
                      .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status Code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }

}
