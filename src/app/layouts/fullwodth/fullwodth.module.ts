import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullwodthComponent} from "./fullwodth.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {LoginComponent} from "../../modules/login/login.component";



@NgModule({
  declarations: [
    FullwodthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullwodthModule { }
