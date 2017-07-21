import React from 'react';

export default class ProductTable extends React.Component {
  render() {
	  let rows = [];
	  lastCategory = "";
	  
	  const Products = this.props.products.map((products) => {
		if(product.category !== lastCategory){
			rows.push{
				<ProductCategoryRow 
					category={product.category} 
					key={parseInt(math.random * 100)} />
				<ProductRow
				key={product.id} 
				{...product}
				/>
			}
		}else{
			<ProductRow 
				key={product.id} 
				{...product} />
		}
		lastCategory = product.category;
		
	  });
	  
    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
				{rows}
            </tbody>
        </table>
    );
  }
}