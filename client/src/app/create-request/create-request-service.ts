import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../core/rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { config } from 'assets/config';


@Injectable()
export class CreateRequestService {
    private WebApiUrl: string;

    constructor(private http: Http) {
        this.WebApiUrl = config.WebApiBaseUrl + '/request';

    }

    createRequest(request, userId) {  
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify(request).toString();
      console.log(body);
      return this.http.post(this.WebApiUrl + '/' + userId, body, options)
                      .map((response: Response) => <any>response)
                      .catch(this.handleError);
    }

    updateStatus(request) {  
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      var body = JSON.stringify(request).toString();
      console.log(body);
      return this.http.put(this.WebApiUrl, body, options)
                      .map((response: Response) => <any>response)
                      .catch(this.handleError);
    }


    private handleError(error: Response) {
        let msg = `Status Code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }

}
