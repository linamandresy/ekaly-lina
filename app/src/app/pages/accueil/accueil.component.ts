import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { RestoService } from 'src/app/services/resto.service';

@Component({
	selector: 'app-accueil',
	templateUrl: './accueil.component.html',
	styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
	plat: Array<any> = [];
	resto: Array<any> = [];
	constructor(
		private mealService: MealService,
		private restoService: RestoService
	) { }

	ngOnInit(): void {
		this.mealService.getAllMeals().subscribe(
			(data: any) => {
				console.log(data.meals);
				if (data.ok) {
					this.plat = data.meals;
				} else {
					window.location.href = '/error';
				}
			}, (error) => {
				window.location.href = '/error';
			}
		);
		this.restoService.getAllResto().subscribe(
			(data: any) => {
				console.log(data.resto);
				if (data.ok) {
					this.resto = data.resto;
				} else {
					window.location.href = '/error';
				}
			}, (error) => {
				window.location.href = '/error';
			}
		)
	}

}
