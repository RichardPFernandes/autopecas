import React from 'react';
import ProductCard from '../components/ProductCard'; // Importa o componente ProductCard
import './Products.css'; // Importa o CSS geral para Products

const mockProducts = [
  { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 50, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', price: 20, image: 'https://via.placeholder.com/150' },
];

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
