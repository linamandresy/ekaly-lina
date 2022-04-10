import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoProfileService } from 'src/app/services/resto/resto-profile.service';

@Component({
	selector: 'app-resto-nav-side',
	templateUrl: './resto-nav-side.component.html',
	styleUrls: ['./resto-nav-side.component.scss']
})
export class RestoNavSideComponent implements OnInit {
	id: string='';
	name: string='Votre restaurant';
	email: string='';
	phone: string='';
	profilePicture: string='https://firebasestorage.googleapis.com/v0/b/ekaly-cdn.appspot.com/o/cartoon-1299636.png?alt=media&token=c9ab8931-3b8e-4a99-a52d-30ed8778cadd';
	description: string='';
	categoryId: string='';
	localisation: { longitude: number, latitude: number, placename: string }={ longitude: 0, latitude: 0, placename: '' };
	illustrations: Array<string>=[]
	constructor(
		private restoProfileService: RestoProfileService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.restoProfileService.getResto().subscribe(
			(data: any) => {
				if (data.ok) {
					this.id = data.resto._id;
					this.name = data.resto._name;
					this.email = data.resto._email;
					this.phone = data.resto._phone;
					if(data.resto._profilePicture!=undefined)
						this.profilePicture = data.resto._profilePicture;
					this.description = data.resto._description;
					this.categoryId = data.resto._categoryId;
					this.localisation = data.resto._localisation;
					this.illustrations = data.resto._illustrations;
				}
				else {
					this.router.navigateByUrl('/error');
				}
			}, (error) => {
				this.router.navigateByUrl('/error');
			}
		)
	}

}
