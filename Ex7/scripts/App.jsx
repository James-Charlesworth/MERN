import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList'


export default class App extends React.Component{
	constructor(){
		super();
		var favourites = [];
		if(localStorage.favourites){
			favourites = JSON.parse(localStorage.favourites);
		}
		this.state = {
			currentAddress: 'Anchorage Quay, Salford M50 3XL, UK',
			mapCoordinates: {
				lat: 53.4739519,
				lng: -2.2881459
			},
			favourites: favourites,
			
		}
	
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
	
	isAddressInFavourites(currentAddress){
		let favourites = this.state.favourites;
		
		for(let i = 0; i<favourites.length;i++){
			if(currentAddress === favourites[i].address){
				return true;
			}else{
				
			}
			
		}
		return false;
	}
	
	favouriteToggle(currentAddress){
		if(this.isAddressInFavourites(currentAddress)){
			this.removeFromFavourites(currentAddress);
		}else{
			this.addToFavourites(currentAddress);
		}
	}
	
	removeFromFavourites(currentAddress){
		let favourites = this.state.favourites;
		let index = -1;
		
		for(let i=0;i<favourites.length;i++){
			if(currentAddress == favourites[i].address){
				index = i;
				break;
			}else{
				
			}
		}
		
		if(index !== -1){
			favourites.splice(index,1);
			this.setState({favourites: favourites});
			localStorage.favourites = JSON.stringify(favourites);
		}
	}
	
	addToFavourites(currentAddress){
		let favourites = this.state.favourites;
		
		favourites.push({
			address: currentAddress, 
			timestamp: Date.now()
			});
		
		this.setState({favourites: favourites});
		localStorage.favourites = JSON.stringify(favourites);
	}
	
	render(){
		return(
			<div>
				<h1>Exercise 7 Map</h1>
				<Search onSearch={this.searchForAddress.bind(this)}/>
				<Map lat={this.state.mapCoordinates.lat} 
				lng={this.state.mapCoordinates.lng} />
				<CurrentLocation 
					address={this.state.currentAddress} 
					favourite={this.isAddressInFavourites(this.state.currentAddress)} 
					onFavouriteToggle={this.favouriteToggle.bind(this)}/>
				<FavouritesList 
					favouriteLocations={this.state.favourites}
					activeLocationAddress={this.state.currentAddress}
					onClick={this.searchForAddress.bind(this)}
					/>
			</div>
		);
		
	}
	
}