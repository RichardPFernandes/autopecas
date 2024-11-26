import React, { useState } from "react";
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // Estado para quantidade

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity }); // Passa o produto com a quantidade
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>R$ {product.price.toFixed(2)}</strong>
      </p>
      <div className="card-footer">
        <div className="quantity-controls">
          <button onClick={decreaseQuantity} className="quantity-button">
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">
            +
          </button>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-button">
          Adicionar <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
