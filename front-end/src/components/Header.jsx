import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount, user }) => {
  return (
    <header>
      <div>
        <Link to="/">Retro Auto Peças</Link>
      </div>
      <nav>
        <Link to="/">Produtos</Link>
        <button className="button-nav">
          {user ? (
            <Link to="/cart">Carrinho ({cartCount})</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
