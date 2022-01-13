import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    StoreModule.forRoot({}, {}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }), 
    NzLayoutModule, NzMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
