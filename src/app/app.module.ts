import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent, HeaderComponent } from './shared';
import { HomeModule } from './home/home.module';
import { NavComponent } from './shared/layouts/nav/nav.component';
import { HeaderInterceptor } from './core/incerpetors/header.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    ProductModule,
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
