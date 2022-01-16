import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating.component';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, PipesModule],
  exports: [RatingComponent],
})
export class RatingModule {}
