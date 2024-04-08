import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <img src={item.image} alt={name} style={{ width: '300px', height: '300px' }} />
      <div>{name}</div>
      <div>${price}</div>
      <div>Quantity: {quantity}</div>
      <div>Total: ${price * quantity}</div>
      <button onClick={() => onRemoveFromCart(id)}>Remove</button>
    </div>
  );
};

export default CartItem;
