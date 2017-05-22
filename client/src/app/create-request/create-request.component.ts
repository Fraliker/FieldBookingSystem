import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CreateRequestService} from './create-request-service';

@Component({
  selector: 'create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css'],
  providers: [CreateRequestService]
})
export class CreateRequestComponent implements OnInit {

  constructor(private CreateRequestService: CreateRequestService,) { }

  @Input() request: any;
  @Input() admin: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  private errorMessage;
  private response;
  private submitted = false;
  ngOnInit() {
  }

  goBack() {
    this.notify.emit(false);
  }

  createRequest() {
    this.CreateRequestService.createRequest(this.request, this.request.user.userId)
      .subscribe(
          response => this.response,
          error => this.errorMessage = <any>error,
          () => this.onCreateRequestSuccess()
    );
  }

  onCreateRequestSuccess() {
    this.submitted = true;
  }

  approve() {

  }

  reject() {

  }

}
