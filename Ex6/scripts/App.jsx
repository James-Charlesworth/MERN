import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';

const coords = {
	lat: 53.4730545,
	lng: -2.3007307,
};

export default class App extends React.Component{
	constructor(){
		super();
		this.state = {
			currentAddress: 'Anchorage 1, Salford Quays',
			mapCoordinates: {
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
	
	searchForAddress(address){
		let self = this;
		
		GMaps.geocode({
			address: address,
			callback: function(results, status){
				if(status !== "OK"){
					self.setState({
						currentAddress: 'Location not Found...'
					});
					return;
				}
				let latlng = results[0].geometry.location;
				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});
	}
	
	
	render(){
		return(
			<div>
				<h1>Exercise 6 Map</h1>
				<Search onSearch={this.searchForAddress.bind(this)}/>
				<Map lat={this.state.mapCoordinates.lat} 
				lng={this.state.mapCoordinates.lng} />
				<CurrentLocation address={this.state.currentAddress} />
			</div>
		);
		
	}
	
}