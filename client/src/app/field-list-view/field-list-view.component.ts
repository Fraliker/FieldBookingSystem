import { Component, OnInit} from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as selectizeSettings from "./dropdown-settings";
import * as _ from 'lodash';
import {FieldListViewService} from "./field-list-view-service";
import {CreateRequestComponent} from "../create-request/create-request.component"

declare var google: any;

@Component({
  selector: 'app-field-list-view',
  templateUrl: './field-list-view.component.html',
  styleUrls: ['./field-list-view.component.css'],
  providers: [FieldListViewService, CreateRequestComponent]
})
export class FieldListViewComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  private timeConfig: any = selectizeSettings.TIME_DROPDOWN_CONFIG;
  private timeOptions: any = _.cloneDeep(selectizeSettings.TIME_OPTIONS);
  private durationConfig: any = selectizeSettings.DURATION_CONFIG;
  private durationOptions: any = _.cloneDeep(selectizeSettings.DURATION_OPTIONS);
  private request: boolean = false;
  private time: string;
  private selectedDate;
  private duration: number;
  private location;
  private fields: any[] = [];
  private selectedField;
  private errorMessage;
  private date: Date = new Date();
  private sportFilters;
  private fieldTypeFilters;
  private ascending = false;
  private availableDates = [];
  private myDatePickerOptions = {
      sunHighlight: false,
      dateFormat: 'mm-dd-yyyy',
      showClearDateBtn: false
  };

  private userRequest = {
    requestId: 0,
    user: {
        userName: "user1",
        userId: 1,
        firstName: "Hesham",
        lastName: "Alsaeedi",
        phoneNo: "206-618-9002",
        userEmail: "hisham02@gmail.com"
    },
    field:{},
    duration: null,
    purpose: null,
    totalPrice: null,
    status: "pending",
    requestDateTime: null,
    createdDateTime: null
  };

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private FieldListViewService: FieldListViewService
  ) {}


  ngOnInit() {

    this.selectedDate = this.getFormattedDate(this.date);


    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.location = place.address_components;
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private searchFields() {
    this.FieldListViewService.getAvailableFields(this.date, this.time, this.duration,
                                    this.location[0].short_name, this.location[2].short_name)
      .subscribe(
        response => this.fields = response,
        error => { this.errorMessage = <any>error; },
        () => this.onGetFieldsListSuccess()
      );
  }

   onGetFieldsListSuccess() {
     // setting available dates
     this.availableDates = [];
     var tempDate = new Date();
     tempDate.setMinutes(parseInt(this.time.substring(this.time.indexOf(':') + 1, this.time.length)));

     if (this.time.substring(this.time.length - 2, this.time.length) == "AM") {
        tempDate.setHours(parseInt(this.time.substring(0, this.time.indexOf(':'))));
     } else {
        tempDate.setHours(parseInt(this.time.substring(0, this.time.indexOf(':'))) + 12);
     }

     // go back 1 hour
     var tempStartDate = tempDate;
     tempStartDate.setHours(tempStartDate.getHours() - 1);
     this.availableDates.push(tempStartDate);

     for (var i = 1; i < 5; i++) {
       var x = new Date();
       x.setHours(tempStartDate.getHours());
       x.setMinutes(tempStartDate.getMinutes() + (30*i));//.setTime(tempStartDate.getTime() + (30*i * 60 * 1000));
       this.availableDates.push(x);
     }
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onDateChanged(event: any) {
    if (event.jsdate != null) {
        this.date = event.jsdate;
    }
  }

  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '-' + day + '-' + year;
  }

  onValueChange($event) {
    console.log("Option changed: ", $event);
  }

  onNotify(back:boolean):void {
    this.request = back;
  }

  onNotifyFilters(filters:any):void {
    //console.log(filters);

  }

  createRequest(field, date) {
    // setting request properties to pass to child
    this.date.setHours(date.getHours());
    this.date.setMinutes(date.getMinutes());
    this.date.setSeconds(0);
    this.selectedField = field;
    this.userRequest.field = field;
    this.userRequest.duration = Number(this.duration);
    this.userRequest.requestDateTime = this.date;
    this.userRequest.totalPrice = (field.fieldHourlyPrice/60) * this.duration;

    console.log(this.userRequest);
    this.request = true;
  }

  sortByPrice() {
    if (!this.ascending) {
      this.fields = _.sortBy(this.fields, "fieldHourlyPrice").reverse();
      this.ascending = true;
    } else {
      this.fields = _.sortBy(this.fields, "fieldHourlyPrice");
      this.ascending = false;
    }
  }

}
