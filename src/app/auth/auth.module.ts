import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbIconModule } from '@nebular/theme';

import { NgxLoginComponent } from './login/login.component';
import {  NbPasswordAuthStrategy } from '@nebular/auth';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbIconModule,
    NbAuthModule,

  ],
  declarations: [
    NgxLoginComponent,
  ],
  providers: [

  ],
})
export class NgxAuthModule {
}
