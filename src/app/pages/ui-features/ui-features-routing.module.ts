import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';


import { SearchComponent } from './search-fields/search-fields.component';

const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ 
  {
    path: 'search-fields',
    component: SearchComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
