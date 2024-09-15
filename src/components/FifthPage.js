import React from 'react';
import './FifthPage.css';

const FifthPage = () => {
  const products = [
    { name: 'Casual Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f09.png' },
    { name: 'Pastel Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f10.png' },
    { name: 'Hoodie Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f11.png' },
    { name: 'Hoodie Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f12.png' },
    { name: 'Hoodie Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f13.png' },
    { name: 'Hoodie Long Sleeve', oldPrice: '$220', newPrice: '$140', image: '/images/f14.png' },
    // Add more products as necessary
  ];

  return (
    <section className="fifth-page">
      <div className="container">
        <h2 className="section-title">Our Product</h2>
        <div className="product-tabs">
          <button className="active-tab">Hot</button>
          <button>On Sale</button>
          <button>Trending Now</button>
          <button>New Arrival</button>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-price">
                <span className="old-price">{product.oldPrice}</span>
                <span className="new-price">{product.newPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthPage;
