import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/Loginpage.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return(
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLoggedIn = () => {
    return isLoggedIn;
  };
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
