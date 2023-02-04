import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ViewComponent
  ]
})
export class LoginModule { }
