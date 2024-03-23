import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="images/logo.png" alt="logo" width="60" height="50" />
        <h1>Ecommerce Company</h1>
      </header>
      <nav style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Header;

