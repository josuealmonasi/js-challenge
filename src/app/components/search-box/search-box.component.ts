import { FetchUrlService } from './../../services/fetch-url.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
	public res;

	constructor(private fetchService: FetchUrlService) {}

	ngOnInit() {}

	/**
   * search
   */
	public search(): void {
		let xmlhttp = new XMLHttpRequest();
		let asin = 'B002QYW8LW';
		// let asin = 'B01MD19OI2';
		xmlhttp.responseType = 'document';
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
				return xmlhttp;
			}
		};
		xmlhttp.open('GET', `https://www.amazon.com/dp/${asin}`, true);
		xmlhttp.onload = () => {
			console.log(xmlhttp.responseXML);
			let tables = xmlhttp.responseXML.querySelectorAll('#prodDetails');
			// console.log(
			tables[0].querySelectorAll('tr').forEach(element => {
				if (element.children[0]['innerText'].includes('Product Dimensions')) {
					console.log(
						element.children[0]['innerText'],
						element.children[1]['innerText'],
					);
				}
			});
			// );
			// console.log(
			// 	new DOMParser()
			// 		.parseFromString(
			// 			tables[0].querySelectorAll('table')[0].innerHTML,
			// 			'text/xml',
			// 		)
			// 		.querySelectorAll('td'),
			// );
			// console.log(
			// 	new DOMParser()
			// 		.parseFromString(
			// 			tables[0].querySelectorAll('table')[1].innerHTML,
			// 			'text/xml',
			// 		)
			// 		.querySelectorAll('td'),
			// );
			// console.log(
			// 	new DOMParser().parseFromString(tables[0].innerHTML, 'text/xml'),
			// );
			// console.log(
			// 	new DOMParser().parseFromString(tables[1].innerHTML, 'text/xml'),
			// );
		};
		xmlhttp.send();
	}
}
