import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductsComponent } from './components/search-products/search-products.component';

const routes: Routes = [
	{ path: 'search-products', component: SearchProductsComponent },
	{
		path: '',
		redirectTo: '/search-products',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
