import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
	lat: 53.4730545,
	lng: -2.3007307,
};

export default class App extends React.Component{
	constructor(){
		super();
		this.state = {
			currentAddress: 'Anchorage 1, Salford Quays',
			mapCoodinates: {
				lat: 53.4739519,
				lng: -2.2881459
			},
			markers: {
				position: {
					lat: 53.475586,
					lng: -2.241402
				}
			}
		}
	
	}
	
	onClick(e) {
    console.log('onClick', e);
	}
	
	
	render(){
		return(
			<div>
				<h1>Exercise 4 Map</h1>
				<Map lat={this.state.mapCoodinates.lat} 
				lng={this.state.mapCoodinates.lng} />
				<CurrentLocation address={this.state.currentAddress} />
			</div>
		);
		
	}
	
}