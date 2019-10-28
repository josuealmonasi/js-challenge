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
		let item = { asin: this.asin, dimensions: '', rank: '', type: '' };
		xmlhttp.responseType = 'document';
		xmlhttp.onreadystatechange = () => {
			if (xmlhttp.readyState === 4 && xmlhttp.status == 200) {
				return xmlhttp;
			}
		};
		xmlhttp.open(
			'GET',
			`https://cors-anywhere.herokuapp.com/https://www.amazon.com/dp/${this
				.asin}`,
			true,
		);
		xmlhttp.onload = () => {
			let type = xmlhttp.responseXML
				.querySelector('#wayfinding-breadcrumbs_container')['innerText']
				.split('›');
			item.type = type[0].trim();
			let tables = xmlhttp.responseXML.querySelectorAll('#prodDetails');
			tables[0].querySelectorAll('tr').forEach(element => {
				if (element.children[0]['innerText'].includes('Product Dimensions')) {
					item.dimensions = element.children[1]['innerText'].trim();
				}
				if (element.children[0]['innerText'].includes('Rank')) {
					let rank = element.children[1]['innerText'].split('(');
					item.rank = rank[0].trim();
				}
			});
			// Logs the ithem just for debugging
			console.log(item);
			this.saveData(item);
		};
		// Resets ASIN
		this.asin = '';
		xmlhttp.send();
	}

	/**
   * saveData
   * takes an item ans saves it to DB
   * @param item 
   */
	public saveData(item: {}) {
		this.db.list('products').push(item);
	}
}
