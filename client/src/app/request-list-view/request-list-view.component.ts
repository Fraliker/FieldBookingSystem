import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RequestListService } from './request-list-service';


@Component({
  selector: 'request-list-view',
  templateUrl: './request-list-view.component.html',
  styleUrls: ['./request-list-view.component.css'],
  providers: [RequestListService]
})
export class RequestListViewComponent implements OnInit {

  private settings = {
    columns: {
      requestId: {
        title: 'Request ID'
      },
      username: {
        title: 'User Name'
      },
      fieldName: {
        title: 'Field'
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

  private adminId: number;
  private errorMessage;
  private data = [];

  constructor(private RequestListService: RequestListService) {

  }


  ngOnInit() {
    //this.getRequests();
  }

  getRequests() {
    // get production data
    this.RequestListService.getRequests(this.adminId)
      .subscribe(
        requestsData => this.data = requestsData,
        error => { this.errorMessage = <any>error; },
        () => this.onGetRequestListSuccess()
      );
  }


  onGetRequestListSuccess() {
    console.log(this.data);
  }

}
