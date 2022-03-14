import React from "react";

// @import Images
import card from "assets/image/card.png";

// @import styles
import "./OracleCard.scss";

const CardSkeleton: React.FC = () => {
  return (
    <div className="oracle-card-wrapper">
      <img src={card} className="oracle-card-bg" alt="cardImg" />
      <div className="card-container">
        <div className="card-header">
          <span className="header-title skeleton"></span>
          <span className="header-status text-active skeleton"></span>
        </div>
        <div className="card-body">
          <div className="coin skeleton"></div>
          <div className="card-body-info">
            <p className="text-price skeleton"></p>
            <p className="text-expiry skeleton"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
