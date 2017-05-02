import { Component, OnInit } from '@angular/core';
import { SideNavFiltersService } from './side-nav-filters-service'


@Component({
  selector: 'side-nav-filters-component',
  templateUrl: './side-nav-filters.component.html',
  styleUrls: ['./side-nav-filters.component.css'],
  providers: [SideNavFiltersService]
})
export class SideNavFiltersComponent implements OnInit {

  constructor(private SideNavFiltersService: SideNavFiltersService) { }

  ngOnInit() {
  }

}
