import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairOrdersComponent } from './repair-orders/repair-orders.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  }, 
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'repair-orders', component: RepairOrdersComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
