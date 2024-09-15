import React from 'react';
import './ForthPage.css';

const ForthPage = () => {
  return (
    <div className="forth-page">
      <div className="bestseller-section">
        <div className="bestseller-text">
          <h2>Best Seller Product</h2>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Eros</p>
          <button className="see-more">See More</button>
        </div>

        <div className="bestseller-products">
          <div className="product-card">
            <img src="/images/f06.png" alt="Product 1" />
            <div className="product-details">
              <p className="product-title">Pastel Long Sleeve</p>
              <p className="product-price"><span className="old-price">$220</span> $140</p>
              <div className="product-rating">★★★★★</div>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/f07.png" alt="Product 2" />
            <div className="product-details">
              <p className="product-title">Pastel Long Sleeve</p>
              <p className="product-price"><span className="old-price">$220</span> $140</p>
              <div className="product-rating">★★★★★</div>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/f08.png" alt="Product 3" />
            <div className="product-details">
              <p className="product-title">Pastel Long Sleeve</p>
              <p className="product-price"><span className="old-price">$220</span> $140</p>
              <div className="product-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForthPage;
