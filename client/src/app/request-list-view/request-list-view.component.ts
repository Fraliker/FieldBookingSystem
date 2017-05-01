import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RequestListService } from './request-list-service';
import { LocalDataSource } from 'ng2-smart-table';
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'request-list-view',
  templateUrl: './request-list-view.component.html',
  styleUrls: ['./request-list-view.component.css'],
  providers: [RequestListService]
})
export class RequestListViewComponent implements OnInit {

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

  private adminId: number;
  private errorMessage;
  private data = [];
  private response;
  selectedResponse;

  constructor(private RequestListService: RequestListService) {
    this.adminId = 1;
  }


  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.source = new LocalDataSource();

    this.RequestListService.getRequests(this.adminId)
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

}
