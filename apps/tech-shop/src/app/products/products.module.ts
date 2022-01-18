import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListModule } from './product-list/product-list.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { RatingModule } from '../shared/rating/rating.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ProductListModule,
    ProductDetailsModule,
    RatingModule,
  ],
  exports: [ProductListModule, ProductDetailsModule],
})
export class ProductsModule {}
