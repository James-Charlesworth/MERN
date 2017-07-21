import React from 'react';
import ProductStore from '../stores/ProductStore';

import ProductTable from './subcomponents/ProductTable';
import SearchBar from './subcomponents/SearchBar';

export default class FilterableProductTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			products: ProductStore.getAllProducts()
		}
	}
	
	
	render() {
		return (
		  <div>
			<SearchBar />
			<ProductTable products={this.state.products} />
		  </div>

		);
	}
}
