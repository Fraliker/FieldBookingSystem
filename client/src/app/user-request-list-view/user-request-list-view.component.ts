import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserRequestListService } from './user-request-list-service';
import { LocalDataSource } from 'ng2-smart-table';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { AuthService } from '../auth/auth-service';
import {CookieService} from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-request-list-view',
  templateUrl: './user-request-list-view.component.html',
  styleUrls: ['./user-request-list-view.component.css'],
  providers: [UserRequestListService]
})
export class UserRequestListViewComponent implements OnInit {

  private settings = {
    columns: {
      'field.fieldId': {
        title: 'Field ID'
      },
      requestId: {
        title: 'Request ID'
      },
      requestDateTime: {
        title: 'Request DateTime'
      },
      status: {
        title: 'Status'
      }
    },
    actions: false

  };

  private source: LocalDataSource;

  private user;
  private userId: number;
  private errorMessage;
  private data = [];
  private response;
  private selectedRequest;
  private viewRequest = false;
  selectedResponse;

  constructor(private UserRequestListService: UserRequestListService, private AuthService: AuthService, private CookieService: CookieService) {
    this.user = JSON.parse(this.CookieService.get('User'));
    this.userId = this.user.id;
    console.log(this.userId);
  }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.source = new LocalDataSource();

    this.UserRequestListService.getRequests(this.userId)
      .subscribe(
        requestsData => this.response = requestsData,
        error => { this.errorMessage = <any>error; },
        () => this.onGetRequestListSuccess()
      );
  }


  onGetRequestListSuccess() {
    this.source.load(this.response);
    console.log(this.response);
  }

  showRequest() {
    console.log(this.selectedRequest);
    this.viewRequest = true;
  }

  onNotify(back:boolean):void {
    this.viewRequest = back;
  }

}
