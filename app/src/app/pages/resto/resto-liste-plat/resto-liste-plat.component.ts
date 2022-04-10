import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
	selector: 'app-resto-liste-plat',
	templateUrl: './resto-liste-plat.component.html',
	styleUrls: ['./resto-liste-plat.component.scss']
})
export class RestoListePlatComponent implements OnInit {
	meals: Array<any> = [];
	constructor(
		private mealService: MealService
	) { }

	ngOnInit(): void {
		this.mealService.getMeals().subscribe(
			(data: any) => {
				console.log(data.meals);
				if(data.ok)
					this.meals=data.meals;
				else
					window.location.href='/error';
			}, (error: any) => {
				window.location.href='/error';
			}
		)
	}

}
