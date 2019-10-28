// Angular modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
// Custom modules
import { MaterialModule } from './custom-material.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { DisplayListComponent } from './components/display-list/display-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
// Env Config
import { environment } from './../environments/environment';
// Pipes
import { ReversePipe } from './reverse.pipe';

@NgModule({
	declarations: [
		AppComponent,
		DisplayListComponent,
		SearchBoxComponent,
		SearchProductsComponent,
		ReversePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
