import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ProductListComponent } from './product-list.component';
import { ProductCardModule, MenuModule, WrapperModule } from '@shared/index';
import { PipesModule } from '@shared/pipes/pipes.module';

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
    NzButtonModule,
    PipesModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
