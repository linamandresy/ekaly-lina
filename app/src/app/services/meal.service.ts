import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(
	  private http:HttpClient
  ) { }
	saveMeal(
		name:string,
		price:number,
		description:string,
		mainImage: string ,
		secondaryImage: Array<string>
	){
		const options = {
			headers:{
				Authorization:`Bearer ${sessionStorage.getItem('resto-token')}`
			}
		};
		const  data = {
			name:name,
			price:price,
			description:description,
			mainImage:mainImage,
			secondaryImage:secondaryImage
		};

		return this.http.post(`${environment.baseUrl}/api/meal`,data,options);
	}

	getMeals(){
		const options = {
			headers:{
				Authorization:`Bearer ${sessionStorage.getItem('resto-token')}`
			}
		};
		return this.http.get(`${environment.baseUrl}/api/meal`,options);
	}
	getAllMeals(){
		return this.http.get(`${environment.baseUrl}/api/meal/all`);
	}

	getMealById(id:string){
		return this.http.get(`${environment.baseUrl}/api/meal/info/${id}`);
	}
}
