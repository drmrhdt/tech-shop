import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { MainComponent } from './main/main.component';
import { ProductListComponent } from './main/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'category/:categoryName',
    component: ProductListComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
