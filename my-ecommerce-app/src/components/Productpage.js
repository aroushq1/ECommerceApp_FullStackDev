import React, {useState, useEffect} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../App.js';

function ProductPage() {
  const [cart, setCart] = useState([]);
  const {authenticated, setAuthenticated} = useAuthContext();
  const navigate = useNavigate();

  useEffect(()=> {
    if (!authenticated){
        navigate(`/login`);
    }
},[authenticated, navigate])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  }

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
      <Header />
      <table style={{width:"100%"}}>
        <tr>
          <td style={{verticalAlign:'top'}}><ProductList addToCart={addToCart} /></td>
          <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default ProductPage;
