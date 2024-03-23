import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
