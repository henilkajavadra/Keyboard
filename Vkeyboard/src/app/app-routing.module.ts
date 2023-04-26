import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'layout1', loadChildren: () => import('./layout1/layout1.module').then(m => m.Layout1Module) }, 
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'layout2', loadChildren: () => import('./layout2/layout2.module').then(m => m.Layout2Module) },
  { path: 'layout3', loadChildren: () => import('./layout3/layout3.module').then(m => m.Layout3Module) },
  { path: 'layout4', loadChildren: () => import('./layout4/layout4.module').then(m => m.Layout4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
