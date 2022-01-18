import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { ProductDetailsComponent } from './product-details.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RatingModule } from '../../shared/rating/rating.module';
import { WrapperModule } from '../../shared/wrapper/wrapper.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    WrapperModule,
    NzButtonModule,
    NzLayoutModule,
    NzGridModule,
    NzTabsModule,
    PipesModule,
    RatingModule,
  ],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
