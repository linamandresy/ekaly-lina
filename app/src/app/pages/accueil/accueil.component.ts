import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { RestoService } from 'src/app/services/resto.service';

@Component({
	selector: 'app-accueil',
	templateUrl: './accueil.component.html',
	styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
	resto: Array<any> = [];
	constructor(
		private restoService: RestoService
	) { }

	ngOnInit(): void {
	
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
		);
	}


}
