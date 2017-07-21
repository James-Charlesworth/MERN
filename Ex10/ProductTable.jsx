import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;

    this.props.products.forEach((product) => {
		//productname dosnt match text || checkbox unticked
		if(product.name.indexOf(this.props.filter) == -1 ){
			return;
		}else if((product.stocked == false) && (this.props.checked === true)){
			return;
		}
		
		if(product.category !== lastCategory) {
			rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			rows.push(<ProductRow product={product} key={product.name} />);
		}
		else {
			rows.push(<ProductRow product={product} key={product.name} />);
		}
		lastCategory = product.category;
	});
	
	
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
  }
}
