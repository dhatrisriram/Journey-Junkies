import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Guide.css";
import Dhruv from './images/Dhruv.jpg';
import Manjunath from './images/Manjunath.jpg';
import Kiran from './images/Kiran.jpg';
import Muniyappa from './images/Muniyappa.jpg';
import Girish from './images/Girish.jpg';
import Lakshmi from './images/Lakshmi.jpg';

// Guide data
const guides = [
  { id: 1, name: "Manjunath", price: 1200, rating: 4.5, location: "Chikmagalur", reviews: ["Excellent guide! Very knowledgeable.", "Manjunath made the trip memorable!"], imgSrc: Manjunath },
  { id: 2, name: "Kiran Setty", price: 1500, rating: 4.8, location: "Hampi", reviews: ["Amazing experience! Highly recommend.", "Kiran was fantastic and fun!"], imgSrc: Kiran },
  { id: 3, name: "Muiyappa A R", price: 1000, rating: 3.8, location: "Bangalore", reviews: ["Very friendly and professional.", "Muniyappa knows the best spots!"], imgSrc: Muniyappa },
  { id: 4, name: "Dhruv Kothari", price: 1300, rating: 4.0, location: "Dandeli", reviews: ["Incredible experience, highly recommend!", "Dhruv is amazing!"], imgSrc: Dhruv },
  { id: 5, name: "Girish Rao", price: 1100, rating: 4.5, location: "Gokarna", reviews: ["Great insights and spots to visit!", "Girish knows the area well!"], imgSrc: Girish },
  { id: 6, name: "Sri Lakshmi", price: 1400, rating: 4.6, location: "Mysore", reviews: ["Wonderful guide, very informative.", "Lakshmi is awesome!"], imgSrc: Lakshmi },
];

// StarRating component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="star-rating">
      {Array(fullStars).fill("★")}
      {Array(halfStars).fill("☆")}
      {Array(emptyStars).fill("☆")}
    </div>
  );
}

function App() {
  const [filters, setFilters] = useState({ price: [0, 2000], rating: 0 });
  const [sort, setSort] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filter and sort guides
  const filteredGuides = guides
    .filter(
      (guide) =>
        guide.price >= filters.price[0] &&
        guide.price <= filters.price[1] &&
        guide.rating >= filters.rating &&
        (locationFilter ? guide.location === locationFilter : true)
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating-desc") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Guide Booking</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* Main Section */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Filters</h2>
          <div className="filter-group">
            <h4>Price Range</h4>
            <input
              type="range"
              min="0"
              max="2000"
              value={filters.price[1]}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, price: [0, parseInt(e.target.value)] }))
              }
            />
            <p>Up to ₹{filters.price[1]}</p>
          </div>
          <div className="filter-group">
            <h4>Rating</h4>
            <select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: parseFloat(e.target.value) }))
              }
            >
              <option value="0">All Ratings</option>
              <option value="3.5">3.5 & Above</option>
              <option value="4">4 & Above</option>
              <option value="4.5">4.5 & Above</option>
            </select>
          </div>
          <div className="filter-group">
            <h4>Location</h4>
            <select
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Chikmagalur">Chikmagalur</option>
              <option value="Hampi">Hampi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Dandeli">Dandeli</option>
              <option value="Gokarna">Gokarna</option>
              <option value="Mysore">Mysore</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="main">
          <div className="sorting">
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort By</option>
              <option value="price-asc">Price Ascending</option>
              <option value="price-desc">Price Descending</option>
              <option value="rating-desc">Rating Ascending</option>
              <option value="rating-desc">Rating Descending</option>
            </select>
          </div>

          {/* Guide List */}
          <div className="guide-list">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <img src={guide.imgSrc} alt={guide.name} className="guide-image" />
                <h3>{guide.name}</h3>
                <p>Price: ₹{guide.price}</p>
                <StarRating rating={guide.rating} />
                <p className="review">"{guide.reviews[0]}"</p>
                <button className="btn-primary">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
    return (
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    );
  }

export default AppWrapper;
