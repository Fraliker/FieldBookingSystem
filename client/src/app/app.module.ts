import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import {Ng2SelectizeModule} from 'ng2-selectize';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavFiltersComponent } from './side-nav-filters/side-nav-filters.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import {} from '@types/googlemaps';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthGuard } from './auth/auth-guard';
import { AuthService } from './auth/auth-service';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    HeaderComponent,
    SideNavFiltersComponent  ],
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
    Ng2SmartTableModule,
    DataTableModule,SharedModule

  ],
    providers: [
    CookieService,AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
