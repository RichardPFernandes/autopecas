import React from 'react';
import './Cart.css'; // Importa o CSS específico para Cart

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: R${total}</h2>
    </div>
  );
};

export default Cart;
