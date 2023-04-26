import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout2Component } from './layout2.component';

const routes: Routes = [{ path: '', component: Layout2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout2RoutingModule { }
