import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../App.js';

function ProductPage() {
  // State for managing cart items
  const [cart, setCart] = useState([]);

  // Accessing authentication context
  const { authenticated, setAuthenticated } = useAuthContext();

  // Hook for navigating to login page if not authenticated
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate(`/login`);
    }
  }, [authenticated, navigate]);

  // Hook for loading cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  // Hook for saving cart items to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Function to remove a product from the cart
  function removeFromCart(item) {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    }).filter(cartItem => cartItem.quantity > 0);
    setCart(updatedCart);
  }

  return (
    <div className="product-page">
      {/* Header component */}
      <Header />
      <table style={{ width: "100%" }}>
        <tr>
          {/* ProductList component */}
          <td style={{ verticalAlign: 'top' }}><ProductList addToCart={addToCart} /></td>
          {/* Cart component */}
          <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default ProductPage;
