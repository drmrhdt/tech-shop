import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
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

const icons: IconDefinition[] = [ShoppingCartOutline];

@NgModule({
  declarations: [AppComponent],
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
    NzGridModule,
    NzIconModule,
    NzIconModule.forRoot(icons),
    MainModule,
    ProductListModule,
    ProductDetailsModule,
    ShoppingCartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
