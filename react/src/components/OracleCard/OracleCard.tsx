import React from "react";

// @import Images
import card from "assets/image/card.png";
import active_card from "assets/image/card-active.png";
import { StatusSVG, CoinSVG, SubtractSVG } from "components/Svg";
import MCX from "assets/image/MCX.png";
import Gate from "assets/image/Gate.png";
import Uniswap from "assets/image/Uniswap.png";
import Coingeco from "assets/image/Coingeco.png";

// @import styles
import "./OracleCard.scss";

const status = [
  { color: "#76FCB3", label: "active" },
  { color: "#FF007A", label: "terminated" },
  { color: "#FFE500", label: "suspended" },
];

interface OracleCardProps {
  data: any;
  active: number;
  onClick: Function;
}

const OracleCard: React.FC<OracleCardProps> = ({ data, active, onClick }) => {
  const handleClick = () => {
    const elemY: any = document
      .querySelector("#card" + data.id)
      ?.getBoundingClientRect().y;
    const detailed: any = document.getElementById("card-detail" + data.id);
    detailed.style.top = elemY + 75 + document.documentElement.scrollTop + "px";
    onClick(data.id);
  };

  return (
    <>
      <div
        className="oracle-card-wrapper"
        id={"card" + data.id}
        onClick={handleClick}
      >
        <img
          src={active === data.id ? active_card : card}
          className="oracle-card-bg"
          alt="cardImg"
        />
        <div className="card-container">
          <div className="card-header">
            <span className="header-title">{data.symbol}</span>
            <span
              className={`header-status text-${status[data.status - 1].label}`}
            >
              <StatusSVG fill={status[data.status - 1].color} />
              {status[data.status - 1].label}
            </span>
          </div>
          <div className="card-body">
            <div>
              <CoinSVG />
            </div>
            <div className="card-body-info">
              <p className="text-price">$ 3,412,025.12</p>
              <p className="text-expiry">End: 08/Sept/2022 16:00</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`card-detail-wrapper ${active === data.id ? "show" : ""}`}
        id={"card-detail" + data.id}
      >
        <div className="card-detail-container">
          <SubtractSVG
            onClick={() => {
              onClick(data.id);
            }}
          />
          <div className="card-detail-header">
            <div className="coin-info">
              <span className="coin-img">
                <CoinSVG />
              </span>
              <span className="coin-symbol">{data.symbol}</span>
            </div>
            <p>$3,412,025.12</p>
          </div>
          <div className={`card-status text-${status[data.status - 1].label}`}>
            <span className="status">
              <StatusSVG fill={status[data.status - 1].color} />
              {status[data.status - 1].label}
            </span>
            <p>Payment method failed, not enough balance. </p>
          </div>
          <div className="detailed-info">
            <div className="piece">
              <p>Updated Time</p>
              <h3>11/08/2021 18:34</h3>
            </div>
            <div className="piece">
              <p>Aggregation Strategy</p>
              <h3>Simple Average</h3>
            </div>
            <div className="piece">
              <p>Lease Period</p>
              <h3>11157754</h3>
            </div>
            <div className="piece">
              <p>Block Number till end</p>
              <h3>xxxxxxxxx</h3>
            </div>
          </div>
          <div className="detailed-info bordered">
            <div className="piece">
              <p>Network</p>
              <h3>Ropsten</h3>
            </div>
            <div className="piece">
              <p>Transaction Hash</p>
              <h3>324...504</h3>
            </div>
            <div className="piece">
              <p>Client</p>
              <h3>Contract</h3>
            </div>
            <div className="piece">
              <p>Contract Address</p>
              <h3>sa1...w1a</h3>
            </div>
          </div>
          <div className="detailed-data-source">
            <h2 className="title">Data Source</h2>
            <div className="data-source-wrapper">
              <div className="piece">
                <div>
                  <img src={MCX} alt="MCX" />
                  <span>MCX</span>
                </div>
                <p>$2,330.12</p>
              </div>
              <div className="piece">
                <div>
                  <img src={Gate} alt="Gate" />
                  <span>Gate</span>
                </div>
                <p>$2,330.12</p>
              </div>
              <div className="piece">
                <div>
                  <img src={Uniswap} alt="Uniswap" />
                  <span>Uniswap</span>
                </div>
                <p>$2,330.12</p>
              </div>
              <div className="piece">
                <div>
                  <img src={Coingeco} alt="Coingeco" />
                  <span>Coingeco</span>
                </div>
                <p>$2,330.12</p>
              </div>
              <div className="piece">
                <div>
                  <img src={Coingeco} alt="Coingeco" />
                  <span>Coingeco</span>
                </div>
                <p>$2,330.12</p>
              </div>
              <div className="piece">
                <div>
                  <img src={Uniswap} alt="Uniswap" />
                  <span>Uniswap</span>
                </div>
                <p>$2,330.12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OracleCard;
