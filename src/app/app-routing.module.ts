import { ProductItemComponent } from './product-item/product-item.component';
import { OnlineStoreComponent } from './online-store/online-store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { WhatIsCbdComponent } from './what-is-cbd/what-is-cbd.component';
import { QualityProductsComponent } from './quality-products/quality-products.component';

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
    path: 'mas-info', component: MoreInfoComponent
  },
  {
    path: 'como-funciona', component: HowItWorksComponent
  },
  {
    path: 'que-es-cbd', component: WhatIsCbdComponent
  },
  {
    path: 'productos-de-calidad', component: QualityProductsComponent
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
