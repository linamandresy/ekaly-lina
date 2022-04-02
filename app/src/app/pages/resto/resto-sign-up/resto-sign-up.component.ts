import { Component, OnInit } from '@angular/core';
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
	constructor(
		private signupService:RestoSignupService
	) { }

	ngOnInit(): void {
	}

	signup():void{
		this.signupService.signup(this.name,this.email,this.password).subscribe(
			(data)=>{
				console.log({data:data});
			},(error)=>{
				console.log({error:error});
			}
		)
	}
}
