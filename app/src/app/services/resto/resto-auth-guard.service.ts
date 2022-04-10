import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestoComponent } from 'src/app/pages/resto/resto.component';
import { RestoProfileService } from './resto-profile.service';

@Injectable({
	providedIn: 'root'
})
export class RestoAuthGuardService implements CanActivate {
	constructor(
		private router: Router,
		private restoProfileService: RestoProfileService
	) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return new Promise((resolve, reject) => {
			if(sessionStorage.getItem("resto-token")) resolve(true);
			this.restoProfileService.isConnected().subscribe(
				(data: any) => {
					if(!data.connected){
						sessionStorage.removeItem("resto-token");
						this.router.navigateByUrl('/resto/login')
					}
				}, (error) => {
					sessionStorage.removeItem("resto-token");
					this.router.navigateByUrl('/resto/login')
				}
			);
		});
	}
}
