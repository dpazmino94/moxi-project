import { ProductItemComponent } from './product-item/product-item.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairOrdersComponent } from './repair-orders/repair-orders.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'repair-orders', component: RepairOrdersComponent
  },
  {
    path: 'inicio', component: OnlineStoreComponent
  },
  {
    path: 'product-item/:id', component: ProductItemComponent
  },
  {
    path: 'carrito', component: MyCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
