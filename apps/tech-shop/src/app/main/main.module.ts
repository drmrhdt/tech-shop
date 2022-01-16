import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { MenuModule } from '../shared/menu/menu.module';
import { WrapperModule } from '../shared/wrapper/wrapper.module';
import { RatingModule } from '../shared/rating/rating.module';

import { MainComponent } from './main.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    NzGridModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
    WrapperModule,
    NzLayoutModule,
    RatingModule,
    PipesModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
