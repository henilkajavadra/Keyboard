import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout3Component } from './layout3.component';

const routes: Routes = [{ path: '', component: Layout3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout3RoutingModule { }
