import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldListViewComponent } from './field-list-view/field-list-view.component';
import { RequestListViewComponent } from './request-list-view/request-list-view.component';
import { UserRequestListViewComponent } from './user-request-list-view/user-request-list-view.component';
import { AddNewFieldComponent } from './add-new-field/add-new-field.component';
import { HomeComponent } from './home/home.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { StandardPageComponent } from './standard-page/standard-page.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing-screen' },
  { path: 'field-list-view', component: FieldListViewComponent },
  { path: 'request-list-view', component: RequestListViewComponent },
  { path: 'user-request-list-view', component: UserRequestListViewComponent },
  { path: 'add-new-field', component: AddNewFieldComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing-screen', component:LandingScreenComponent},
  { path: 'standard-page', component:StandardPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    FieldListViewComponent,
    RequestListViewComponent,
    AddNewFieldComponent,
    HomeComponent,
    CreateRequestComponent,
    LandingScreenComponent,
    StandardPageComponent
   ];
