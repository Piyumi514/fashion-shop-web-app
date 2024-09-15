import React from 'react';
import './LastPage.css';  // Assuming you'll style the page separately


const LastPage = () => {
  return (
    <div className="last-page">
      <div className="image-container">
      <div className="box image1">
        <img src="/images/f02.png" alt="Fashion 1" />
      </div>
      <div className="box image2">
        <img src="/images/f04.png" alt="Fashion 2" />
      </div>
      <div className="box image3">
        <img src="/images/f15.png" alt="Fashion 3" />
      </div>
      <div className="box image4">
        <img src="/images/f01.png" alt="Fashion 4" />
      </div>
      <div className="box image5">
        <img src="/images/f03.png" alt="Fashion 5" />
      </div>
    </div>
      <div className="footer">
        <p>Follow Our Instagram: <a href="https://instagram.com/Fifash_Trends">@Fifash_Trends</a></p>
        <div className="footer-links">
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#kids">Kids</a>
          <a href="#trends">Trends</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
        </div>
        <p>&copy; 2021 FIFAH. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default LastPage;
