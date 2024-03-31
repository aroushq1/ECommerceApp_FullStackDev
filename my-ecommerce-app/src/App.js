import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/Productpage'; 
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
