import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentRoutingModule } from './environment-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EnvironmentRoutingModule
  ]
})
export class EnvironmentModule { }
