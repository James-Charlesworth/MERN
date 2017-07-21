import React from 'react';

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(){
		this.props.onUserInput(this.filterTextInput.value, this.checkedInput.checked);
	}
	
	render() {
		return (
			<form>
				<input type="text" 
					placeholder="Search..." 
					value={this.props.filter}
					ref={(input)=> this.filterTextInput = input}
					onChange={this.handleChange}/>
				<p>
					<input 
						type="checkbox" 
						checked={this.props.checked}
						ref={(input)=>this.checkedInput = input}
						onChange={this.handleChange}/>
					{' '}Only show products in stock
				</p>
			</form>
		);
	}
}
