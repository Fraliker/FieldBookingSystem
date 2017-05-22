import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../core/rxjs-extensions';
import { Observable } from 'rxjs/Observable';
import { config } from 'assets/config';


@Injectable()
export class UserRequestListService {
    private WebApiUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.WebApiUrl = config.WebApiBaseUrl + '/request';

    }

    getRequests(userId) {
      return Observable.create(observer => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", this.WebApiUrl + '/user/' + userId);

        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            observer.next(JSON.parse(xmlhttp.response))
          }
        }
        xmlhttp.send();
      });
    }

    private handleError(error: Response) {
        let msg = `Status Code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }

}