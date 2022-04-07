import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoLoginService } from 'src/app/services/resto/resto-login.service';

@Component({
	selector: 'app-resto-log-in',
	templateUrl: './resto-log-in.component.html',
	styleUrls: ['./resto-log-in.component.scss']
})
export class RestoLogInComponent implements OnInit {

	hide:boolean=true;
	email:string='';
	password:string='';
	error:string='';
	constructor(
		private loginService:RestoLoginService,
		private router:Router
	) { }

	ngOnInit(): void {
	}
	login():void {
		this.loginService.login(this.email,this.password).subscribe(
			(data)=>{
				if(data.ok){
					sessionStorage.setItem("resto-token",data.token);
					this.router.navigate(['/resto/accueil'])
				}else{
					this.error=data.error;
				}
			},(error)=>{
				this.router.navigate(['/error']);
			}
		)
	}
}
