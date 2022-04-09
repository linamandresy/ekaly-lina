import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resto-edit-profile',
	templateUrl: './resto-edit-profile.component.html',
	styleUrls: ['./resto-edit-profile.component.scss']
})
export class RestoEditProfileComponent implements OnInit {

	profilePicture: string = '';
	illustrations: Array<string> = [];
	constructor() { }
	ngOnInit(): void {
	}
	getProfilePicture(value: Array<string>) {
		this.profilePicture = value[0];
	}
	getIllustrations(value: Array<string>) {
		this.illustrations = value;
	}

}
