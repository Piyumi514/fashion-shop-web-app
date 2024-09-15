// src/components/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FIFASH</div>
        <ul className="nav-links">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Collection</li>
          <li>Trends</li>
        </ul>
        <div className="auth-options">
          <button className="login-btn">Login</button>
          <div className="cart-icon">🛒</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Find The Best Fashion Style For You</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
            congue eros, eget tincidunt ipsum eleifend ut.
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img
            src="/images/f01.png" // Using public folder path
            alt="Fashion Model"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
