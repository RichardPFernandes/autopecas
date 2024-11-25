import React from 'react';
import './Products.css'; // Importa o CSS específico para Products

const mockProducts = [
  { id: 1, name: 'Produto 1', price: 50 },
  { id: 2, name: 'Produto 2', price: 30 },
  { id: 3, name: 'Produto 3', price: 20 },
];

const Products = ({ addToCart }) => {
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {mockProducts.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
