import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideNavFiltersService } from './side-nav-filters-service'


@Component({
  selector: 'side-nav-filters-component',
  templateUrl: './side-nav-filters.component.html',
  styleUrls: ['./side-nav-filters.component.css'],
  providers: [SideNavFiltersService]
})
export class SideNavFiltersComponent implements OnInit {

  @Output() notifySports: EventEmitter<any> = new EventEmitter<any>();
  @Output() notifyFieldTypes: EventEmitter<any> = new EventEmitter<any>();

  private sports: any[] = [];
  private fieldTypes: any[] = [];
  private selectedSports:any = [];
  private selectedFieldTypes = [];

  private errorMessage;
  constructor(private SideNavFiltersService: SideNavFiltersService) { }

  ngOnInit() {
    this.sportFilters();
    this.fieldTypeFilters();
  }

  sportFilters() {
    this.SideNavFiltersService.getSports()
      .subscribe(
        filters => this.sports = filters,
        error => { this.errorMessage = <any>error; },
        () => this.onGetSportFilters()
      );
  }

  fieldTypeFilters() {
    this.SideNavFiltersService.getFieldTypes()
      .subscribe(
        filters => this.fieldTypes = filters,
        error => { this.errorMessage = <any>error; },
        () => this.onGetFieldTypeFiltersSuccess()
      );
  }

  setTypeFilter(element, field) {
    if (element.target.checked) {
      this.selectedFieldTypes.push(field);
    } else {
      // Find and remove item from an array
      var i = this.selectedFieldTypes.indexOf(field);
      if(i != -1) {
        this.selectedFieldTypes.splice(i, 1);
      }
    }
    this.notifyFieldTypes.emit(this.selectedFieldTypes);
  }


  setSportFilter(element, id) {
    if (element.checked) {

    }
  }

  onGetFieldTypeFiltersSuccess() {
    console.log(this.fieldTypes);
  }

  onGetSportFilters() {
    console.log(this.sports);
  }

}
