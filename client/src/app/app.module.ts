import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import {Ng2SelectizeModule} from 'ng2-selectize';

import { AppComponent } from './app.component';
import { FieldListViewComponent } from './field-list-view/field-list-view.component';
import { HeaderComponent } from './header/header.component';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { SideNavFiltersComponent } from './side-nav-filters/side-nav-filters.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import {} from '@types/googlemaps';
import { MyDatePickerModule } from 'mydatepicker';
import { RequestListViewComponent } from './request-list-view/request-list-view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    HeaderComponent,
    SearchOptionsComponent,
    SideNavFiltersComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDBfDjJ6j9xIO22sZseNJc9CUceIdWLMnU",
      libraries: ["places"]
    }),
    Ng2SelectizeModule,
    Ng2SmartTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
