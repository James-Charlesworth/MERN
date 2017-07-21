import React from 'react';

export default class ProductCategoryRow extends React.Component {
	render(){
		const {price, name, stocked} = this.props;
		if(stocked){
			const displayName = 
		}else{
			const displayName = 
		}
		return (
			<tr>
				<th colSpan="2">{this.props.category}</th>
			</tr>
		);
	}
}