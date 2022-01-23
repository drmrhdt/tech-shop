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

import { MenuModule } from '../shared/menu/menu.module';
import { WrapperModule } from '../shared/wrapper/wrapper.module';
import { RatingModule } from '../shared/rating/rating.module';

import { MainComponent } from './main.component';
import { PipesModule } from '../pipes/pipes.module';

import * as fromMain from './reducers';
import { MainEffects } from './main.effects';

@NgModule({
  declarations: [MainComponent],
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
    StoreModule.forFeature(fromMain.mainFeatureKey, fromMain.mainReducer),
    EffectsModule.forFeature([MainEffects]),
  ],
  exports: [MainComponent],
})
export class MainModule {}
