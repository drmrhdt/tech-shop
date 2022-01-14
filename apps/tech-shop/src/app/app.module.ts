import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import { ShoppingCartOutline } from '@ant-design/icons-angular/icons';
import { ProductListComponent } from './product-list/product-list.component';
import { MainComponent } from './main/main.component';
const icons: IconDefinition[] = [ShoppingCartOutline];

@NgModule({
  declarations: [AppComponent, ProductListComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
    NzCarouselModule,
    NzButtonModule,
    NzCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
