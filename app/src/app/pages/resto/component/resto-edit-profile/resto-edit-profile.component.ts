import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoCategoriesService } from 'src/app/services/component/resto-categories.service';
import { RestoProfileService } from 'src/app/services/resto/resto-profile.service';

@Component({
	selector: 'app-resto-edit-profile',
	templateUrl: './resto-edit-profile.component.html',
	styleUrls: ['./resto-edit-profile.component.scss']
})
export class RestoEditProfileComponent implements OnInit {
	id: string = '';
	name: string = '';
	email: string = '';
	phone: string = '';
	profilePicture: string = '';
	description: string = '';
	categoryId: string = '';
	localisation: { longitude: number, latitude: number, placename: string } = { longitude: 0, latitude: 0, placename: '' }
	illustrations: Array<string> = [];


	hideLoader:boolean=true;
	categories: Array<{ _id: string, category: string }> = [];
	constructor(
		private restoCategoryService: RestoCategoriesService,
		private restoProfileService: RestoProfileService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.initResto();
		this.initCategories();
	}
	getProfilePicture(value: Array<string>) {
		this.profilePicture = value[0];
	}
	getIllustrations(value: Array<string>) {
		this.illustrations = value;
	}
	getGeoLocalisation(value: { longitude: number, latitude: number, placename: string }) {
		this.localisation = value;
	}
	initCategories(): void {
		this.restoCategoryService.getCategories().subscribe(
			(data: any) => {
				if (data.ok) {
					this.categories = data.categories;
				}
				else {
					this.router.navigate(['/error']);
				}
			}, (error) => {
				this.router.navigate(['/error']);
			}
		)
	}
	initResto(): void {
		this.restoProfileService.getResto().subscribe(
			(data: any) => {
				console.log(data)
				if (data.ok) {
					this.id = data.resto._id;
					this.name = data.resto._name;
					this.email = data.resto._email;
					this.phone = data.resto._phone;
					this.profilePicture = data.resto._profilePicture;
					this.description = data.resto._description;
					this.categoryId = data.resto._categoryId;
					if(data.resto._localisation!=null)
						this.localisation = data.resto._localisation;
					this.illustrations = data.resto._illustrations;
				} else {
					this.router.navigateByUrl('/error');
				}
			}, (error) => {
				this.router.navigateByUrl('/error');
			}
		)
	}

	updateProfile(): void {
		this.hideLoader=false;
		this.restoProfileService.updateResto(
			this.id,
			this.name,
			this.email,
			this.phone,
			this.profilePicture,
			this.description,
			this.categoryId,
			this.localisation,
			this.illustrations
		).subscribe(
			(data)=>{
				this.hideLoader=true;
				window.location.reload();
			},(error)=>{
				this.router.navigateByUrl('/error');
			}
		);
	}
}
