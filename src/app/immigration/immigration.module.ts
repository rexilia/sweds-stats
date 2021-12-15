import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmigrationRoutingModule } from './immigration-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ImmigrationRoutingModule
  ]
})
export class ImmigrationModule { }
