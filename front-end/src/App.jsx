import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Products from './pages/Products';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  const [user, setUser] = useState(null); 
  const [cart, setCart] = useState([
    {
      id: 4,
      name: "Produto 4",
      description: "Descrição do Produto 4",
      price: 80,
      image: "https://via.placeholder.com/150",
      category: "Eletrônicos",
    },
    {
      id: 5,
      name: "Produto 5",
      description: "Descrição do Produto 5",
      price: 15,
      image: "https://via.placeholder.com/150",
      category: "Roupas",
    },]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };


  return (
    <div>
    <Header cartCount={cart.length} />
    <Routes>
      <Route path="/" element={<Products addToCart={addToCart} />} />
      <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route
          path="/cart"
          // element={user ? <Cart cart={cart} /> : <Navigate to="/login" />}
          element={<Cart cart={cart} />}
        />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  </div>
  );
}

export default App;
