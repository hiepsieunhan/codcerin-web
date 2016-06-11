import React from 'react';
import ProductCard from '../components/card/ProductCard';
import { products, productNames } from '../data/product';

export default class Product extends React.Component {

  render () {

    const currentLocation = this.props.location.pathname;

    return (
      <div className="product-page__container">
        {productNames.map((productName, index) => (
          <div className="product-page__card-container" key={index}>
            <ProductCard product={products[productName]} route={productName}/>
          </div>
        ))}
      </div>
    );
  }
}
