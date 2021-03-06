import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductListModule } from './product-list/product-list.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { RatingModule } from '@shared/index';
import { ProductsEffects } from './store/products.effects';
import * as fromProducts from './store/reducers';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: ':subcategory',
    component: ProductListComponent,
  },
  {
    path: ':subcategory/:productName',
    component: ProductDetailsComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ProductListModule,
    ProductDetailsModule,
    RatingModule,
    StoreModule.forFeature(
      fromProducts.homeFeatureKey,
      fromProducts.productsReducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
    [RouterModule.forChild(routes)],
  ],
  exports: [ProductListModule, ProductDetailsModule],
})
export class ProductsModule {}
