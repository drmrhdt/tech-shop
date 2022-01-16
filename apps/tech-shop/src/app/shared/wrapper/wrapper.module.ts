import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { WrapperComponent } from './wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule, NzGridModule],
  exports: [WrapperComponent],
})
export class WrapperModule {}
