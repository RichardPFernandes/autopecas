import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const mockProducts = [
  {
    id: 1,
    name: "Produto 1",
    price: 50,
    image: "https://via.placeholder.com/150",
    category: "Eletrônicos",
  },
  {
    id: 2,
    name: "Produto 2",
    price: 30,
    image: "https://via.placeholder.com/150",
    category: "Roupas",
  },
  {
    id: 3,
    name: "Produto 3",
    price: 20,
    image: "https://via.placeholder.com/150",
    category: "Livros",
  },
  {
    id: 4,
    name: "Produto 4",
    price: 80,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Eletrônicos",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 15,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Roupas",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 15,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Roupas",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 15,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Roupas",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 15,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Roupas",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 15,
    image:
      "https://www.suportedistribuidora.com.br/img/produtos/distribuidora-pecas-para-motores.jpg",
    category: "Roupas",
  },
];

const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearch(searchQuery);
  };

  const filteredProducts = mockProducts
    .filter((product) => (filter ? product.category === filter : true))
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="products-page">
      <div className="filters-search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
