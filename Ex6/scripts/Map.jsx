import React from 'react';

export default class Map extends React.Component{
	
	
	componentDidMount(){
		this.componentDidUpdate();
		
	}
	
	componentDidUpdate(){
		var map = new GMaps({
			el: '#map',
			lat:this.props.lat,
			lng:this.props.lng
			});
			
			map.addMarker({
				lat: this.props.lat,
				lng: this.props.lng,
				title: 'Lima',
				click: function(e) {
					alert('Oi, no clicking!');
				}
			});
		
	}
	
	
	render(){
		return(
			<div className='map-overlay'>
				<p>Loading...</p>
				<div id='map' ></div>
			</div>
		);
		
	}
}