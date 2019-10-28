import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
	public res;
	public asin: string;

	constructor(public db: AngularFireDatabase) {}

	ngOnInit() {}

	/**
   * search
   */
	public search(): void {
		if (!this.asin) {
			return;
		} else if (this.asin.length === 0) {
			return;
		}
		let xmlhttp = new XMLHttpRequest();
		let item = { asin: this.asin, dimensions: '', rank: '', type: 'type' };
		xmlhttp.responseType = 'document';
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
				return xmlhttp;
			}
		};
		xmlhttp.open('GET', `https://www.amazon.com/dp/${this.asin}`, true);
		xmlhttp.onload = () => {
			// let type = xmlhttp.responseXML
			// 	.querySelector('#wayfinding-breadcrumbs_container')['innerText']
			// 	.splice('›');
			// console.log(type[0]);
			let tables = xmlhttp.responseXML.querySelectorAll('#prodDetails');
			tables[0].querySelectorAll('tr').forEach(element => {
				if (element.children[0]['innerText'].includes('Product Dimensions')) {
					item.dimensions = element.children[1]['innerText'].trim();
				}
				if (element.children[0]['innerText'].includes('Rank')) {
					item.rank = element.children[1]['innerText'].trim();
					item.type = element.children[1]['innerText'].trim();
				}
			});
			this.saveData(item);
		};
		xmlhttp.send();
	}

	/**
   * saveData
   */
	public saveData(item: {}) {
		this.db.list('products').push(item);
	}
}
