import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class RestoProfileService {

	constructor(
		private http: HttpClient
	) { }

	getResto() {
		const options = {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('resto-token')}`
			}
		};
		return this.http.get(`${environment.baseUrl}/api/resto/info`, options);
	}
	isConnected() {
		const options = {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('resto-token')}`
			}
		};
		console.log(options);
		return this.http.get(`${environment.baseUrl}/api/resto/connected`, options);
	}

	updateResto(
		id: string,
		name: string,
		email: string,
		phone: string,
		profilePicture: string,
		description: string,
		categoryId: string,
		localisation: { longitude: number, latitude: number, placename: string },
		illustrations: Array<string>
	) {
		const data = {
			id: id,
			name: name,
			email: email,
			phone: phone,
			profilePicture: profilePicture,
			description: description,
			categoryId: categoryId,
			localisation: localisation,
			illustrations: illustrations
		};
		const options = {
			headers:{
				Authorization: `Bearer ${sessionStorage.getItem('resto-token')}`
			}
		}
		return this.http.put(`${environment.baseUrl}/api/resto/${id}`,data,options);
	}
}
