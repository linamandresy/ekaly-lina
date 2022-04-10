import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoLoginService } from 'src/app/services/resto/resto-login.service';

@Component({
	selector: 'app-resto-log-in',
	templateUrl: './resto-log-in.component.html',
	styleUrls: ['./resto-log-in.component.scss']
})
export class RestoLogInComponent implements OnInit {

	hideLoader:boolean=true;
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
		this.hideLoader=false;
		this.loginService.login(this.email,this.password).subscribe(
			(data)=>{
				if(data.ok){
					sessionStorage.setItem("resto-token",data.token);
					window.location.href=`/resto/accueil`;
				}else{
					this.hideLoader=true;
					this.error=data.error;
				}
			},(error)=>{
				this.router.navigate(['/error']);
			}
		)
	}
}
