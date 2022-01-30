import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { MenuComponent } from './menu.component';
import * as fromMenu from './reducers';
import { MenuEffects } from './menu.effects';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NzMenuModule,
    NzSkeletonModule,
    PipesModule,
    StoreModule.forFeature(fromMenu.menuFeatureKey, fromMenu.menuReducer),
    EffectsModule.forFeature([MenuEffects]),
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
