import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class RestoService {

	constructor(
		private http: HttpClient
	) { }

	getAllResto(){
		return this.http.get(`${environment.baseUrl}/api/resto/all`);
	}
}
