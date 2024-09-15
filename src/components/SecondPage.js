// src/components/SecondPage.js
import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
  return (
    <div className="second-page">
      <h2>New Collection</h2>
      <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Eros</p>
  
      <div className="image-grid">
        <div className="image-item item-1">
          <img src="/images/f02.png" alt="New Fashion 1" />
        </div>
        <div className="image-item item-2">
          <img src="/images/f03.png" alt="New Fashion 2" />
        </div>
        <div className="image-item item-3">
          <img src="/images/f04.png" alt="New Fashion 3" />
        </div>
      </div>
    </div>
  );
  
};

export default SecondPage;
