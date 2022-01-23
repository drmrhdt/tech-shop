import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ProductListComponent } from './product-list.component';
import { WrapperModule } from '../../shared/wrapper/wrapper.module';
import { MenuModule } from '../../shared/menu/menu.module';
import { RatingModule } from '../../shared/rating/rating.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    MenuModule,
    NzGridModule,
    WrapperModule,
    RatingModule,
    NzButtonModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
