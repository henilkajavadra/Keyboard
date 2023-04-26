import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout2RoutingModule } from './layout2-routing.module';
import { Layout2Component } from './layout2.component';


@NgModule({
  declarations: [
    Layout2Component
  ],
  imports: [
    CommonModule,
    Layout2RoutingModule
  ]
})
export class Layout2Module { }
