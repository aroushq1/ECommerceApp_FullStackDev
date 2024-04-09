import React from 'react';
import CartItem from './CartItem';

function Cart({cart, removeFromCart}) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
      ))}
      <p>Total (in cart): ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</p>
    </div>
  );
}

export default Cart;

