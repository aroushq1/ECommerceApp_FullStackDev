import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
  // State to store products retrieved from the API
  const [products, setProducts] = useState("");

  // Fetching products from the API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      // Checking if the API call was successful
      if (response.ok) {
        return response.json();
      } else {
        // Throwing an error if the API call failed
        throw new Error('API call failed');
      }
    })
    .then(data => setProducts(data)) // Setting the retrieved products in state
    .catch(error => console.log(error)); // Handling any errors
  }, []); // This effect runs only once when the component mounts

  return (
    <div className="product-list">
      {/* Rendering ProductItem component for each product */}
      {(products) ? <ProductItem product={products} addToCart={props.addToCart} /> : ""}
    </div>
  );
}

export default ProductList;
