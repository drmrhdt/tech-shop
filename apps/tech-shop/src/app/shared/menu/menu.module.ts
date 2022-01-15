import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, NzMenuModule],
  exports: [MenuComponent],
})
export class MenuModule {}
