import React from "react";
import "./Cart.css"; // Importa o CSS específico para Cart

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Meu Carrinho</h1>
        {cart.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">
                      R${item.price.toFixed(2)}
                      <span className="quantity">{item.quantity ? item.quantity + "x" : "1x"}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="cart-total">Total: R${total.toFixed(2)}</h2>
            <button className="checkout-button">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
