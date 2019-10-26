import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    SearchBoxComponent,
    SearchProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
