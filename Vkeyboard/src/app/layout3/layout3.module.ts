import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout3RoutingModule } from './layout3-routing.module';
import { Layout3Component } from './layout3.component';


@NgModule({
  declarations: [
    Layout3Component
  ],
  imports: [
    CommonModule,
    Layout3RoutingModule
  ]
})
export class Layout3Module { }
