import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'parent',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
