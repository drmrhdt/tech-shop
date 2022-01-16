import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { ProductListComponent } from './product-list.component';
import { MenuModule } from '../shared/menu/menu.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, NzCardModule, MenuModule, NzGridModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
