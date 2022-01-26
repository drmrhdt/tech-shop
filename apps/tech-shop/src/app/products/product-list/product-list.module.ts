import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { ProductListComponent } from './product-list.component';
import { WrapperModule } from '../../shared/wrapper/wrapper.module';
import { MenuModule } from '../../shared/menu/menu.module';
import { ProductCardModule } from '../../shared/product-card/product-card.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MenuModule,
    NzGridModule,
    WrapperModule,
    ProductCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    PipesModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
