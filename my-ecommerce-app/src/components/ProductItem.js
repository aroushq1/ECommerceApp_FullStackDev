import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
      <img className="product-image" src={product.image} alt={product.name} />
      <div>{product.name}</div>
      <div>${product.price}</div>
      {showDescription && <div>{product.description}</div>}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
