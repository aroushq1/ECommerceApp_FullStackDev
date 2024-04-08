import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/Productpage'; 
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import './App.css';


const AuthenticationContext = createContext();
export const useAuthenticationContext = () => useContext(AuthenticationContext);
export const AuthenticationProvider = ({ children }) => {
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
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
