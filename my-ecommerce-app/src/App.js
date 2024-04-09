// Importing necessary modules and components
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Homepage from './components/Homepage.js';
import Productpage from './components/Productpage.js';
import Loginpage from './components/LoginPage.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Creating a context for authentication
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuthContext = () => useContext(AuthContext);

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // State to hold authentication status
  const [authenticated, setAuthenticated] = useState(false);

  return (
    // Providing authentication status to child components
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Main App component
function App() {
  // State to track whether user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if user is logged in
  const checkLoggedIn = () => {
    return isLoggedIn;
  };

  return (
    // Wrapping the entire app with AuthProvider to manage authentication state
    <AuthProvider>
      {/* Setting up routing using BrowserRouter */}
      <BrowserRouter>
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Homepage />} />
          {/* Route for the login page */}
          <Route path="/login" element={<Loginpage />} />
          {/* Route for the product page */}
          <Route path="/products" element={<Productpage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
