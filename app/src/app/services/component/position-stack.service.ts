import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class PositionStackService {

	constructor(
		private http: HttpClient
	) { }

	search(placename: string) {
		//return this.http.get(`http://api.positionstack.com/v1/forward?access_key=${environment.positionStackAPIKey}&query=${placename}`);
		return this.http.get('localhost:3000');
	}
}
