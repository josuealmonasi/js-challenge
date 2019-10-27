import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatProgressBarModule,
} from '@angular/material';

/**
 * NgModule that includes all Material modules.
*/
@NgModule({
	exports: [
		// Material
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressBarModule,
	],
})
export class MaterialModule {}
