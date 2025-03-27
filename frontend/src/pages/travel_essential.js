import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./travel_essential.css";
import tentImage from "./images/tent.jpg";
import bagImage from "./images/bag.jpg";
import firstAidKitImage from "./images/fak.jpg";
import jacketImage from "./images/jacket.jpg";
import shoesImage from "./images/shoes.jpg";
import ponchoImage from "./images/poncho.jpg";
import CheckoutPage from "./CheckoutPage";

const products = [
  { id: 1, name: "Tent", price: 2299, category: "Trekking", color: "Blue", material: "Polyester", image: tentImage },
  { id: 2, name: "Bag", price: 650, category: "Trekking", color: "Black", material: "Nylon", image: bagImage },
  { id: 3, name: "First aid kit", price: 150, category: "Trekking", color: "Red", material: "Polyethylene", image: firstAidKitImage },
  { id: 4, name: "Wind proof jacket", price: 699, category: "Beach", color: "Green", material: "Polyester", image: jacketImage },
  { id: 5, name: "Trekking shoes", price: 1500, category: "Trekking", color: "Yellow", material: "Nylon", image: shoesImage },
  { id: 6, name: "Poncho", price: 100, category: "Temple", color: "Pink", material: "Polyethylene", image: ponchoImage },
];

function App({ cart, setCart }) {
  const [filters, setFilters] = useState({ color: [], material: [], price: [0, 10000] });
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (category === "All" || product.category === category) &&
        (!filters.color.length || filters.color.includes(product.color)) &&
        (!filters.material.length || filters.material.includes(product.material)) &&
        product.price >= filters.price[0] &&
        product.price <= filters.price[1]
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (updated[type].includes(value)) {
        updated[type] = updated[type].filter((v) => v !== value);
      } else {
        updated[type].push(value);
      }
      return updated;
    });
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">Travel Essentials</h1>
        <nav>
          {["All", "Trekking", "Beach", "Temple", "Other"].map((tab) => (
            <button
              key={tab}
              className={`nav-button ${category === tab ? "active" : ""}`}
              onClick={() => setCategory(tab)}
            >
              {tab}
            </button>
          ))}
          <button className="nav-button" onClick={() => navigate("/checkout")}>
            Go to Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </nav>
      </header>
      <div className="container">
        <div className="sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <h4>Color</h4>
            {["Black", "Blue", "Green", "Yellow", "Pink", "Red"].map((color) => (
              <div key={color}>
                <input
                  type="checkbox"
                  id={color}
                  onChange={() => handleFilterChange("color", color)}
                />
                <label htmlFor={color}>{color}</label>
              </div>
            ))}
          </div>
          <div className="filter-group">
            <h4>Material</h4>
            {["Polyester", "Nylon", "Polyethylene"].map((material) => (
              <div key={material}>
                <input
                  type="checkbox"
                  id={material}
                  onChange={() => handleFilterChange("material", material)}
                />
                <label htmlFor={material}>{material}</label>
              </div>
            ))}
          </div>
          <div className="filter-group">
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="10000"
              value={filters.price[1]}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, price: [0, parseInt(e.target.value)] }))
              }
            />
            <p>Up to ₹{filters.price[1]}</p>
          </div>
        </div>
        <div className="main">
          <div className="sorting">
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort By</option>
              <option value="price-asc">Price Ascending</option>
              <option value="price-desc">Price Descending</option>
            </select>
          </div>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!!cart.find((item) => item.id === product.id)}
                >
                  {cart.find((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
