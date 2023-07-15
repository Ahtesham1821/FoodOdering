import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: 'header',
    component:HeaderComponent
  },
  {
    path:'body',
    component:BodyComponent
  },
  {
    path:'order',
    component:OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
