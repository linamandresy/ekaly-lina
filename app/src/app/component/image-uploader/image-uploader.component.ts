import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageUploaderService } from 'src/app/services/component/image-uploader.service';

@Component({
	selector: 'app-image-uploader',
	templateUrl: './image-uploader.component.html',
	styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
	@Input()
	isMultiple: boolean = false;

	@Output()
	urls=new EventEmitter<Array<string>>()
	files: File[] = [];
	fileURL: Array<string> = [];
	constructor(
		private uploader: ImageUploaderService
	) { }

	ngOnInit(): void {
	}
	onSelect(event: any) {
		if (!this.isMultiple) {
			this.files = [];
			this.fileURL = [];
		}
		let addedFiles = event.addedFiles;
		addedFiles.forEach((file: File) => {
			this.files.push(file);
			this.uploader.upload(file).forEach((data: any) => {
				if(data.body){
					this.fileURL.push(data.body.url);
					this.urls.emit(this.fileURL);
				}
			});
		});
	}
}


