import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';


import { AnunciosComponent } from './anuncios/anuncios.component';

const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ 
  {
    path: 'anuncios',
    component: AnunciosComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
