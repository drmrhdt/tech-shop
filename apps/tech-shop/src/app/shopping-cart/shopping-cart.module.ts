import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ShoppingCartComponent } from './shopping-cart.component';
import { WrapperModule } from '../shared/wrapper/wrapper.module';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    WrapperModule,
    NzInputModule,
    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
  ],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
