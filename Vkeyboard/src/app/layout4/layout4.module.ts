import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout4RoutingModule } from './layout4-routing.module';
import { Layout4Component } from './layout4.component';


@NgModule({
  declarations: [
    Layout4Component
  ],
  imports: [
    CommonModule,
    Layout4RoutingModule
  ]
})
export class Layout4Module { }
