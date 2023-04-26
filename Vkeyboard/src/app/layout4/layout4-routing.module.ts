import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout4Component } from './layout4.component';

const routes: Routes = [{ path: '', component: Layout4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout4RoutingModule { }
