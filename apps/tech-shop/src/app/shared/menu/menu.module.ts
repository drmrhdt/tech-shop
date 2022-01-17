import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzMenuModule } from 'ng-zorro-antd/menu';

import { MenuComponent } from './menu.component';

import { StoreModule } from '@ngrx/store';
import * as fromMenu from './reducers';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
    StoreModule.forFeature(fromMenu.menuFeatureKey, fromMenu.menuReducer),
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
