import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filter: "",
			checked: false
		}
	}
	
	filteredProducts(){
		var filteredProducts = products;
		//let name = products.name.toLowercase();
		for(x in products){
			filteredProducts[x].name = this.products[x].name;
		}
		return filteredProducts;
	}
	
	handleUserInput(filter, checked){
		this.setState({
			filter: filter,
			checked: checked
		});
	}
	
	render() {
		return (
		  <div>
			<SearchBar 
				filter={this.state.filter} 
					checked={this.state.checked}
					onUserInput={this.handleUserInput.bind(this)}/>
			<ProductTable 
				products={this.props.products} 
				filter={this.state.filter} 
				checked={this.state.checked}
			/>
		  </div>
		);
	}
}
