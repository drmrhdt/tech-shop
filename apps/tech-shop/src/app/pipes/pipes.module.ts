import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluralizePipe } from './pluralize.pipe';
import { ArrayFromNumberPipe } from './array-from-number.pipe';

@NgModule({
  declarations: [PluralizePipe, ArrayFromNumberPipe],
  imports: [CommonModule],
  exports: [PluralizePipe, ArrayFromNumberPipe],
})
export class PipesModule {}
