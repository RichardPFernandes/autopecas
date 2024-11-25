import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Products from './pages/Products';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null); 
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };


  return (
    <div className='main'>
    <Header cartCount={cart.length} />
    <Routes>
      <Route path="/" element={<Products addToCart={addToCart} />} />
      <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route
        path="/cart"
        element={user ? <Cart cart={cart} /> : <Navigate to="/login" />}
      />
    </Routes>
  </div>
  );
}

export default App;
