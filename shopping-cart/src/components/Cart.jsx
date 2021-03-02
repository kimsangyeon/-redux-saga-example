import React from 'react';
import { connect } from 'react-redux';
import { checkout, removeFromCart } from '../actions';
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../reducers';

import CartItem from './CartItem';

const Cart = ({
  products,
  total,
  error,
  checkoutPending,
  checkout,
  removeFromCart,
}) => {
  const hasProducts = products.length > 0;
  const checkoutAllowed = hasProducts && !checkoutPending;
  const nodes = !hasProducts ? (
    <em>Please add some products to cart.</em>
  ) : (
    products.map(product => (
      <CartItem
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        onRemove={() => removeFromCart(product.id)}
      />
    ))
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Totla: &#36;{total}</p>
      <button onClick={checkout} disabled={checkoutAllowed ? '' : disabled}>
        Checkout
      </button>
      <div style={{ color: 'red' }}>{error}</div>
    </div>
  )

};

export default connect(
  state => ({
    products: getCartProducts(state),
    totla: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart },
)(Cart);
