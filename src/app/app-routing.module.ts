import { ProductItemComponent } from './product-item/product-item.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio',
    pathMatch: 'full'
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
