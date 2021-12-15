import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppShellRoutingModule
  ]
})
export class AppShellModule { }
