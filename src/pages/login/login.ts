import { Component } from '@angular/core';
import { TabsPage } from './../tabs/tabs';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	tab0Root: any = TabsPage;

	// google maps zoom level
	zoom: number = 8;
	// initial center position for the map
	lat: number = 35.227085;
	lng: number = -80.843124;
	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}
	mapClicked($event: MouseEvent) {
	}
	markerDragEnd(m: marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}
	markers: marker[] = [
		{
			lat: 35.227085,
			lng: -78.843124,
			label: 'A',
			draggable: true
		},
		{
			lat: 35.227085,
			lng: -80.943124,
			label: 'B',
			draggable: false
		},
		{
			lat: 36.227085,
			lng: -77.823124,
			label: 'C',
			draggable: true
		},
		{
			lat: 35.227085,
			lng: -79.823124,
			label: 'D',
			draggable: true
		},
		{
			lat: 36.227085,
			lng: -82.943124,
			label: 'E',
			draggable: false
		},
	]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}