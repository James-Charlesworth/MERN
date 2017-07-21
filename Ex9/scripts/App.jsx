import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Main/Header';
import Footer from './Main/Footer';

export default class App extends React.Component{
	
	
	render(){
		return(
			<div>
				<Header />
				<main className="row">{this.props.children}</main>
				<Footer />
			</div>
		);
	}
}