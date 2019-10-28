import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reverse',
})
export class ReversePipe implements PipeTransform {
	/**
   * Reverse array
   * @param value 
   * @param args 
   */
	transform(value: any, ...args: any[]): any {
		if (!value) return;
		return value.reverse();
	}
}
