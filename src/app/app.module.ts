import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { MaterialModule } from './custom-material.module';

@NgModule({
	declarations: [
		AppComponent,
		DisplayListComponent,
		SearchBoxComponent,
		SearchProductsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
