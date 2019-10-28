import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-display-list',
	templateUrl: './display-list.component.html',
	styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit {
	public items: Observable<any[]>;

	constructor(public db: AngularFireDatabase) {
		this.items = db.list('products').valueChanges();
	}

	ngOnInit() {}
}
