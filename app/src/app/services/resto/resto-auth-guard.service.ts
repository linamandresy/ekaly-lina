import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestoComponent } from 'src/app/pages/resto/resto.component';

@Injectable({
	providedIn: 'root'
})
export class RestoAuthGuardService implements CanActivate {

	constructor(
		private router:Router
	) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if(sessionStorage.getItem("resto-token") !== null){
			return true;
		}else{
			this.router.navigateByUrl('/resto/login')
			return false;
		}
	}
}
