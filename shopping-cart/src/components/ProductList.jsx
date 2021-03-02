import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from './ProductItem';

const ProductList = ({
  products,
  addToCart,
}) => (
  <div>
    <h3>Products</h3>
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </div>
);

export default connect(
  state= ({ products: getVisibleProducts(state.products) }),
  { addToCart },
)(ProductList);