import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feature, Map, View } from 'ol';
import { Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, transform } from 'ol/proj';
import OSM from 'ol/source/OSM';
import * as layers from 'ol/layer';
import Vector from 'ol/source/Vector';
import { PositionStackService } from 'src/app/services/component/position-stack.service';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { toSize } from 'ol/size';
@Component({
	selector: 'app-map-locator',
	templateUrl: './map-locator.component.html',
	styleUrls: ['./map-locator.component.scss']
})
export class MapLocatorComponent implements OnInit {
	map: Map | undefined;
	placeName: string = '';
	localisation: { longitude: number, latitude: number, placename: string } = { longitude: 0, latitude: 0, placename: this.placeName };
	displayMap: boolean = false;

	@Output()
	geolocalisation:EventEmitter<{ longitude: number, latitude: number, placename: string }>=new EventEmitter();
	constructor(
		private positionStack: PositionStackService
	) { }
	ngOnInit(): void {
	}
	showMap() {
		this.displayMap = true;
		this.positionStack.search(this.placeName).subscribe(
			(data: any) => {
				this.localisation.latitude = data.data[0].latitude;
				this.localisation.longitude = data.data[0].longitude;
				this.localisation.placename = this.placeName;
				this.initializeMap();
			}, (error) => {
				navigator.geolocation.getCurrentPosition((position) => {
					this.localisation = {
						longitude: position.coords.longitude,
						latitude: position.coords.latitude,
						placename: this.placeName
					};
					this.initializeMap();

				});
			}
		);
	}
	initializeMap():void{
		if (this.map) this.map.dispose();
		const iconFeature = new Feature({
			geometry: new Point(fromLonLat([
				this.localisation.longitude,
				this.localisation.latitude
			])),
			name: this.placeName,
		});

		this.map = new Map({
			view: new View({
				center: fromLonLat([
					this.localisation.longitude,
					this.localisation.latitude
				]),
				zoom: 15
			}),
			layers: [
				new TileLayer({ source: new OSM() }),
				new layers.Vector({
					source: new Vector({
						features: [iconFeature]
					}),
					style: new Style({
						image: new Icon({
							anchor: [0.5, 46],
							anchorXUnits: 'fraction',
							anchorYUnits: 'pixels',
							src: 'https://firebasestorage.googleapis.com/v0/b/ekaly-cdn.appspot.com/o/locator-1093167_640%20(1).png?alt=media&token=be8440f4-a754-4fb4-956c-a7a0c0b6d47d'
						})
					})
				})
			],
			target: 'map-ol'
		});
		this.geolocalisation.emit(this.localisation);
		this.map.on('singleclick', (evt)=> {
			let coords = (transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
			console.log(coords);
			this.localisation.longitude = coords[0];
			this.localisation.latitude = coords[1];
			this.initializeMap();
		});
	}
}
