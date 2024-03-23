import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total with two decimal places
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemoveFromCart={removeFromCart} />
      ))}
      {/* Display the total with two decimal places */}
      <h3 style={{ fontWeight: 'normal' }}>Total (in cart): ${total}</h3>
    </div>
  );
};

export default Cart;
