import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardModule } from './components/product-card/product-card.module';
import { WrapperModule } from './components/wrapper/wrapper.module';
import { RatingModule } from './components/rating/rating.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ProductCardModule, WrapperModule, RatingModule, PipesModule],
})
export class SharedModule {}
