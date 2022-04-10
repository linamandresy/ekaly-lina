import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
	selector: 'app-resto-nouveau-plat',
	templateUrl: './resto-nouveau-plat.component.html',
	styleUrls: ['./resto-nouveau-plat.component.scss']
})
export class RestoNouveauPlatComponent implements OnInit {
	name:string='';
	price:number=0;
	description:string='';
	mainImage: string = 'https://firebasestorage.googleapis.com/v0/b/ekaly-cdn.appspot.com/o/hamburger-31775_1280.png?alt=media&token=09d5ba14-c7ea-47da-b5d8-66ed46e28f1d';
	secondaryImage: Array<string> = [];

	hideLoader:boolean=true;
	constructor(
		private mealService:MealService
	) { }

	ngOnInit(): void {
	}

	getMainImage(value: Array<string>) {
		this.mainImage = value[0];
	}
	getSecondaryImage(value: Array<string>) {
		this.secondaryImage = value;
	}

	saveMeal(){
		this.hideLoader=false;
		this.mealService.saveMeal(this.name,this.price,this.description,this.mainImage,this.secondaryImage).subscribe(
			(data:any)=>{
				if(data.ok)
					window.location.href='/resto/plats';
				else
					window.location.href='/error';
			},
			(error:any)=>{
				window.location.href='/error';
			}
		)
	}
}
