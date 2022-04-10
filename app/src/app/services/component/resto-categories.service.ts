import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestoCategoriesService {

  constructor(
	  private http:HttpClient
  ) { }

  getCategories(){
	  return this.http.get(`${environment.baseUrl}/api/resto/categories`);
  }
}
