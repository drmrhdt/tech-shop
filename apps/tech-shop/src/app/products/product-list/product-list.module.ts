import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { ProductListComponent } from './product-list.component';
import { WrapperModule } from '../../shared/wrapper/wrapper.module';
import { MenuModule } from '../../shared/menu/menu.module';
import { ProductCardModule } from '../../shared/product-card/product-card.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    NzGridModule,
    NzCheckboxModule,
    WrapperModule,
    ProductCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzInputModule,
    PipesModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
