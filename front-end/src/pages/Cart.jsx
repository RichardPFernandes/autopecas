import React, { useState } from "react";
import "./Cart.css";
import PaymentModal from "../components/PaymentModal";

const Cart = ({ cart }) => {
  const [showModal, setShowModal] = useState(false); // Controle de visibilidade do modal
  const [paymentMethod, setPaymentMethod] = useState("");

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleShowModal = () => setShowModal(true); // Mostra o modal
  const handleCloseModal = () => setShowModal(false); // Fecha o modal

  const handlePayment = (method) => {
    setPaymentMethod(method);
    alert(`Forma de pagamento selecionada: ${method}`);
    // Aqui você pode adicionar a lógica de pagamento real
  };

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
                      R${(item.price * (item.quantity || 1)).toFixed(2)}
                      <span className="quantity">
                        {item.quantity ? item.quantity + "x" : "1x"}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="cart-total">Total: R${total.toFixed(2)}</h2>
            <button className="checkout-button" onClick={handleShowModal}>
              Finalizar Compra
            </button>
          </div>
        )}
      </div>

      {/* Modal de Pagamento */}
      <PaymentModal
        showModal={showModal}
        handleClose={handleCloseModal}
        handlePayment={handlePayment}
      />
    </div>
  );
};

export default Cart;
