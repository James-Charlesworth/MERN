import {EventEmitter} from 'events';

class ProductStore extends EventEmitter{
	constructor(){
		super();
		this.products = [
		  {category: 'Sporting Goods', price: '�49.99', stocked: true, name: 'Football'},
		  {category: 'Sporting Goods', price: '�9.99', stocked: true, name: 'Baseball'},
		  {category: 'Sporting Goods', price: '�29.99', stocked: false, name: 'Basketball'},
		  {category: 'Electronics', price: '�99.99', stocked: true, name: 'iPod Touch'},
		  {category: 'Electronics', price: '�399.99', stocked: false, name: 'iPhone 6s'},
		  {category: 'Electronics', price: '�199.99', stocked: true, name: 'Nexus 7'}
		]
	}
	
	getAllProducts(){
		return this.products;
	}
	
}

const productStore = new ProductStore;
export default productStore;