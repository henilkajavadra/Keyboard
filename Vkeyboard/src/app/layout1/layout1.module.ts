import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1RoutingModule } from './layout1-routing.module';
import { Layout1Component } from './layout1.component';


@NgModule({
  declarations: [
    Layout1Component
  ],
  imports: [
    CommonModule,
    Layout1RoutingModule
  ]
})
export class Layout1Module { }
