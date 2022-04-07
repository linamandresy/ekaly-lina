import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class RestoSignupService {

	constructor(
		private http: HttpClient
	) { }

	signup(name: string, email: string, password: string): Observable<any> {
		const data: any = {
			name: name,
			email: email,
			password: password
		};
		return this.http.post(`${environment.baseUrl}/api/resto/signup`, data, {});
	}
}
