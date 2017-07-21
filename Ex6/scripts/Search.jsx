import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			value: ''
		}
	}
	
	handleClick(e){
		this.setState({value: e.target.value});
	}
	
	handleSubmit(e){
		e.preventDefault();
		//Pass the value of state to onSearch through props
		this.props.onSearch(this.state.value);
		//Run the blur() function on the input by using a ReactDOM method and
		//an element selector to find it.
		ReactDOM.findDOMNode(this).querySelector('input').blur();
	}
	
	render(){
		return(
			
			<form id="geocoding-form" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<input type="text" id="address" className="form-control" placeholder="Find a Location..." value={this.state.value} onChange={this.handleClick.bind(this)}></input>
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden='true' onClick={this.handleSubmit.bind(this)}></span>
							</span>
						</div>
					</div>
				</div>
			</form>
		);
	}
}