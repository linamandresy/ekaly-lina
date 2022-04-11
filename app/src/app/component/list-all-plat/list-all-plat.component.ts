import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
	selector: 'app-list-all-plat',
	templateUrl: './list-all-plat.component.html',
	styleUrls: ['./list-all-plat.component.scss']
})
export class ListAllPlatComponent implements OnInit {
	plat: Array<any> = [];

	constructor(
		private mealService: MealService
	) { }

	ngOnInit(): void {
		this.initMeals();
	}
	initMeals() {
		this.mealService.getAllMeals().subscribe(
			(data: any) => {
				if (data.ok) {
					this.plat = data.meals;
				} else {
					window.location.href = '/error';
				}
			}, (error) => {
				window.location.href = '/error';
			}
		);
	}

	redirectToCommand(idPlat: string) {
		window.location.href = `/new-command/${idPlat}`;
	}
}
