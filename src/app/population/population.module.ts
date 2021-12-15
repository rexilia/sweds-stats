import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulationRoutingModule } from './population-routing.module';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PopulationRoutingModule, MatTableModule],
})
export class PopulationModule {}
