import { ProductItemComponent } from './product-item/product-item.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairOrdersComponent } from './repair-orders/repair-orders.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'online-store',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'repair-orders', component: RepairOrdersComponent
  },
  {
    path: 'online-store', component: OnlineStoreComponent
  },
  {
    path: 'product-item/:id', component: ProductItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
