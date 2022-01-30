import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ProductCardModule, WrapperModule } from '@shared/index';
import * as fromShoppingCart from './store/reducer';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    WrapperModule,
    NzInputModule,
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    ProductCardModule,
    NzIconModule,
    StoreModule.forFeature(
      fromShoppingCart.shoppingCartFeatureKey,
      fromShoppingCart.shoppingCartReducer
    ),
  ],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
