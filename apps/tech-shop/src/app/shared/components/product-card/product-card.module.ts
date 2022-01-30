import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ProductCardComponent } from './product-card.component';
import { RatingModule } from '../rating/rating.module';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    NzButtonModule,
    NzCardModule,
  ],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
