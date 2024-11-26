import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import SortFilter from "../components/SortField";
import { FaSearch } from "react-icons/fa";

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
    name: "Alternador",
    price: 20,
    description: "Marca",
    image:
      "https://pecahoje.vteximg.com.br/arquivos/ids/174846-1000-1000/alternador-0098-chery-face-v5-c1.jpg?v=637934215050100000",
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
          <button onClick={handleSearch}><FaSearch /></button>
        </div>
        <SortFilter />
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
