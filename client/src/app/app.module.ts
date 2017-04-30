import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { FieldListViewComponent } from './field-list-view/field-list-view.component';
import { HeaderComponent } from './header/header.component';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { SideNavFiltersComponent } from './side-nav-filters/side-nav-filters.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import {} from '@types/googlemaps';


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
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDBfDjJ6j9xIO22sZseNJc9CUceIdWLMnU",
      libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
