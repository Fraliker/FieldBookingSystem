import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldListViewComponent } from './field-list-view/field-list-view.component';
import { RequestListViewComponent } from './request-list-view/request-list-view.component';
import { UserRequestListViewComponent } from './user-request-list-view/user-request-list-view.component';
import { AddNewFieldComponent } from './add-new-field/add-new-field.component';
import { HomeComponent } from './home/home.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth/auth-guard'

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing-screen'},
  { path: 'field-list-view', component: FieldListViewComponent, canActivate: [AuthGuard]  },
  { path: 'request-list-view', component: RequestListViewComponent, canActivate: [AuthGuard]  },
  { path: 'user-request-list-view', component: UserRequestListViewComponent, canActivate: [AuthGuard]  },
  { path: 'add-new-field', component: AddNewFieldComponent, canActivate: [AuthGuard]  },
  { path: 'header', component:HeaderComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'landing-screen', component:LandingScreenComponent}
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
    UserRequestListViewComponent,
    HeaderComponent
   ];
