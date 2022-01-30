import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { RatingModule, MenuModule, WrapperModule } from '@shared/index';

import { HomeComponent } from './home.component';
import { PipesModule } from '@shared/pipes/pipes.module';

import * as fromHome from './store/reducers';
import { HomeEffects } from './store/home.effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MenuModule,
    NzGridModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
    NzSpaceModule,
    NzSkeletonModule,
    WrapperModule,
    NzLayoutModule,
    RatingModule,
    PipesModule,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
