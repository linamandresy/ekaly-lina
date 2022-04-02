import { Component, OnInit } from '@angular/core';
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
	constructor(
		private loginService:RestoLoginService
	) { }

	ngOnInit(): void {
	}
	login():void {
		this.loginService.login(this.email,this.password).subscribe(
			(data)=>{
				console.log({"data":data})
			},(error)=>{
				console.log({"error":error})
			}
		)
	}
}
