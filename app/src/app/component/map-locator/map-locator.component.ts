import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import Layer from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { PositionStackService } from 'src/app/services/component/position-stack.service';

@Component({
	selector: 'app-map-locator',
	templateUrl: './map-locator.component.html',
	styleUrls: ['./map-locator.component.scss']
})
export class MapLocatorComponent implements OnInit {
	map:Map|undefined;
	placeName: string = '';
	localisation: { longitude: number, latitude: number ,placename:string } = { longitude: 0, latitude: 0 , placename:this.placeName};
	displayMap: boolean = false;
	constructor(
		private positionStack: PositionStackService
	) { }
	ngOnInit(): void {
	}
	showMap() {
		this.displayMap = true;
		if(this.map) this.map.dispose();
		this.positionStack.search(this.placeName).subscribe(
			(data: any) => {
				this.localisation.latitude = data.data[0].latitude;
				this.localisation.longitude = data.data[0].longitude;
				this.localisation.placename = this.placeName;
				this.map = new Map({
					view: new View({
						center: fromLonLat([
							this.localisation.longitude,
							this.localisation.latitude
						]),
						zoom: 15
					}),
					layers: [
						new TileLayer({ source: new OSM() })
					],
					target: 'map-ol'
				});
			}, (error) => {
				navigator.geolocation.getCurrentPosition((position) => {
					this.localisation = {
						longitude: position.coords.longitude,
						latitude: position.coords.latitude,
						placename:this.placeName
					};
					this.map = new Map({
						view: new View({
							center: fromLonLat([
								this.localisation.longitude,
								this.localisation.latitude
							]),
							zoom: 15
						}),
						layers: [
							new TileLayer({ source: new OSM() })
						],
						target: 'map-ol'
					});
				});
			}
		);

	}

}
