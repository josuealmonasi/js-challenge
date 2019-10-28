import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductsComponent } from './components/search-products/search-products.component';

const routes: Routes = [
	{ path: '', component: SearchProductsComponent },
	{
		path: '**',
		redirectTo: '/',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
