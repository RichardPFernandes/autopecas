import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa o CSS específico para o Header

const Header = ({ cartCount, user }) => {
  return (
    <header>
      <div>
        <Link to="/">🛒 Minha Loja</Link>
      </div>
      <nav>
        <Link to="/">Produtos</Link>
        {user ? (
          <Link to="/cart">Carrinho ({cartCount})</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
