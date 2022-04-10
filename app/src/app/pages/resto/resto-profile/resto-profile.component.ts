import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoProfileService } from 'src/app/services/resto/resto-profile.service';

@Component({
	selector: 'app-resto-profile',
	templateUrl: './resto-profile.component.html',
	styleUrls: ['./resto-profile.component.scss']
})
export class RestoProfileComponent implements OnInit {
	name:string='Resto Name';
	category:string='Kind of Resto';
	profileUrl:string='https://firebasestorage.googleapis.com/v0/b/ekaly-cdn.appspot.com/o/cartoon-1299636.png?alt=media&token=c9ab8931-3b8e-4a99-a52d-30ed8778cadd';
	illustrations:Array<string>=[];
	phone:string='034 XX XXX XX';
	email:string='example@ekaly.com';
	description:string='';
	localisation:{longitude:number,latitude:number,placename:string}={longitude:0,latitude:0,placename:''};
	constructor(
		private profileRestoService:RestoProfileService,
		private router:Router
	) { }

	ngOnInit(): void {
		this.initProfile();
	}
	initProfile():void{
		this.profileRestoService.getResto().subscribe(
			(data:any)=>{
				console.log(data);
				if(data.ok){
					this.name = data.resto._name;
					if(data.resto._profilePicture!==undefined)
						this.profileUrl=data.resto._profilePicture;
					this.illustrations = data.resto._illustrations;
					this.localisation = data.resto._localisation;
					this.name = data.resto._name;
					this.email = data.resto._email;
					this.phone = data.resto._phone;
					
					this.description = data.resto._description;
					
					this.localisation = data.resto._localisation;
					this.illustrations = data.resto._illustrations;
				}else{
					this.router.navigateByUrl('/error');
				}
			},(error)=>{
				this.router.navigateByUrl('/error');
			}
		)
	}

}
