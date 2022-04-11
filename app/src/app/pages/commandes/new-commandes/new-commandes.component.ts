import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
	selector: 'app-new-commandes',
	templateUrl: './new-commandes.component.html',
	styleUrls: ['./new-commandes.component.scss']
})
export class NewCommandesComponent implements OnInit {
	name:string='';
	description:string='';
	price:number=0;
	qte:number=1;
	mainImage:string='https://firebasestorage.googleapis.com/v0/b/ekaly-cdn.appspot.com/o/4%2F11%2F2022%2C%203%3A45%3A55%20PM277784714_10159945584039322_3741424070917517528_n.png?alt=media&token=6b0c1bd3-1357-4250-a4a2-f356aec6ba8e';
	secondaryImage:Array<string>=[];
	restoName:string='';
	constructor(
		private activatedRoute: ActivatedRoute,
		private mealService:MealService
	) { }

	ngOnInit(): void {
		this.initMeal();
	}
	initMeal(){
		this.activatedRoute.params.subscribe((params: any) => {
			let id = params.id;
			this.mealService.getMealById(id).subscribe(
				(data:any)=>{
					console.log(data);
					if(data.ok){
						this.name = data.meal._name;
						this.description = data.meal._description;
						this.price = data.meal._price;
						this.qte = data.meal._qte;
						this.mainImage = data.meal._mainImage;
						this.secondaryImage = data.meal._secondaryImage;
						this.restoName = data.meal._resto[0]._name;

					}else
						window.location.href='/error';
				},(error:any)=>{
					window.location.href='/error';
				}
			)
		});
	}

}
