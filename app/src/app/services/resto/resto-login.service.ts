import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class RestoLoginService {

	constructor(
		private http: HttpClient
	) { }
	login(email: string, password: string): Observable<any> {
		const data:any = {
			email:email,
			password:password
		};
		console.log(`${environment.baseUrl}/api/resto/login`)
		return this.http.post(`${environment.baseUrl}/api/resto/login`,data,{});
	}
}
