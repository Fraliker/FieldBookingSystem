import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldListViewComponent } from './field-list-view/field-list-view.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'field-list-view' },
  { path: 'field-list-view', component: FieldListViewComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    FieldListViewComponent
   ];
