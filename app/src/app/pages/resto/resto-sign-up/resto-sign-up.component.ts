import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoSignupService } from 'src/app/services/resto/resto-signup.service';

@Component({
	selector: 'app-resto-sign-up',
	templateUrl: './resto-sign-up.component.html',
	styleUrls: ['./resto-sign-up.component.scss']
})
export class RestoSignUpComponent implements OnInit {
	hide: boolean = true;
	name:string='';
	email:string='';
	password:string='';
	error:string='';
	constructor(
		private signupService:RestoSignupService,
		private router:Router
	) { }

	ngOnInit(): void {
	}

	signup():void{
		this.signupService.signup(this.name,this.email,this.password).subscribe(
			(data)=>{
				if(data.ok){
					sessionStorage.setItem("token",data.token);
					this.router.navigate(['/resto/accueil']);
				}else{
					this.error = data.error;
				}
			},(error)=>{
				console.log({error:error});
			}
		)
	}
}
