import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperModule } from '../shared/wrapper/wrapper.module';

import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, WrapperModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
