import React from 'react';
import './SixthPage.css'; // Ensure to link the CSS file

function SixthPage() {
  return (
    <div className="sixth-page-container">
      <div className="sixth-page">
        {/* Deal of the Day Section */}
        <div className="deal-of-the-day">
          <div className="deal-text">
            <h1>Deal Of The Day</h1>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Erosget Triduntt</p>
            <div className="timer">
              <div className="time-block">
                <h2>08</h2>
                <span>Days</span>
              </div>
              <div className="time-block">
                <h2>09</h2>
                <span>Hours</span>
              </div>
              <div className="time-block">
                <h2>14</h2>
                <span>Min</span>
              </div>
            </div>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img
            src="/images/f15.png" 
            alt="Deal"
            className="deal-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SixthPage;
