import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FetchUrlService {
	constructor(private http: HttpClient) {}

	/**
   * getUrl
   */
	public getUrl(asin: string): Observable<any> {
		console.log('jkdhskjdhskjdhskj');
		// this.http.
		return this.http.get(`https://www.amazon.com/dp/${asin}`);
		// fetch(`//www.amazon.com/dp/${asin}`, {
		// 	mode: 'no-cors',
		// }).then(response => {
		// 	return response;
		// });
	}
}
