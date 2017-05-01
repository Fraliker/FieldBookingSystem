import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as selectizeSettings from "./dropdown-settings";
import * as _ from 'lodash';


declare var google: any;

@Component({
  selector: 'search-options-component',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  private timeConfig: any = selectizeSettings.TIME_DROPDOWN_CONFIG;
  private timeOptions: any = _.cloneDeep(selectizeSettings.TIME_OPTIONS);

  private durationConfig: any = selectizeSettings.DURATION_CONFIG;
  private durationOptions: any = _.cloneDeep(selectizeSettings.DURATION_OPTIONS);


  private time: string;
  private selectedDate;
  private myDatePickerOptions = {
      sunHighlight: false,
      dateFormat: 'mm-dd-yyyy',
      showClearDateBtn: false
  };
  private date: Date = new Date();

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
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



}
