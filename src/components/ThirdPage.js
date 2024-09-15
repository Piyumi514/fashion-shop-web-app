import React from 'react';
import './ThirdPage.css';

const ThirdPage = () => {
  return (
    <section className="third-page">
      <div className="content-wrapper">
        <div className="fashion-image">
          <img src="/images/f05.png" alt="Fashion Model" />
        </div>
        <div className="fashion-text">
          <h2>Best Fashion Since 2014</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
            congue eros, eget tincidunt ipsum eleifend ut.
          </p>
        </div>
      </div>
      <div className="fashion-stats">
        <div className="stat-item">
          <h3>2014</h3>
          <p>FiFash Founded</p>
        </div>
        <div className="stat-item">
          <h3>8900+</h3>
          <p>Products Sold</p>
        </div>
        <div className="stat-item">
          <h3>3105+</h3>
          <p>Best Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
