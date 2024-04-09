import React from 'react';

function CartItem({item, removeFromCart}) {
  function handleRemove() {
    removeFromCart(item);
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{width: '250px'}}/>
      <p>{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.quantity * item.price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;