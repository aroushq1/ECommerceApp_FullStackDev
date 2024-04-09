import React, { useState } from 'react';

function ProductItem({product: products, addToCart}) {
  const [showDescription, setShowDescription] = useState(false);


  return products.map(function(product){
    return (
      <div className="product-item" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <img src={product.image} alt={product.name} style={{ width: '300px'}} />
        <p>{product.name}</p>
        <p>Price: ${product.price}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
        {showDescription && <p>{product.description}</p>}
      </div>
    );
  });
}

export default ProductItem;
