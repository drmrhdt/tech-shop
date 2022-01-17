import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IconDefinition } from '@ant-design/icons-angular';

import { ShoppingCartOutline } from '@ant-design/icons-angular/icons';
import { MainModule } from './main/main.module';
import { ProductListModule } from './product-list/product-list.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { reducers, metaReducers } from './reducers';

const icons: IconDefinition[] = [ShoppingCartOutline];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
    MainModule,
    ProductListModule,
    ProductDetailsModule,
    ShoppingCartModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
