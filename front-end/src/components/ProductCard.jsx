import React from 'react';
import './ProductCard.css'; // Importa o CSS específico para o ProductCard

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">R${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
