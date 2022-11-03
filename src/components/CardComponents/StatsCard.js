import React from "react";
import "./index.css";
import { FaWallet, FaEye, FaPercent, FaMoneyBill } from "react-icons/fa";

const StatsCard = () => {
  return (
    <section>
      {/* <div className="StatsCard color1">
        <div className="total-loans">
          <div className="logo">
            <FaWallet />
          </div>
          <div className="eye">
            <FaEye />
          </div>
          <div className="content">
            <div className="total">
              <h6>Total loans amount</h6>
            </div>
            <h5>
              <span className="currency">&#8358;</span>150, 000.00
            </h5>
          </div>
        </div>
      </div>
      <div className="StatsCard color2">
        <div className="total-loans">
          <div className="logo">
            <FaPercent />
          </div>
          <div className="eye">
            <FaEye />
          </div>
          <div className="content">
            <div className="total">
              <h6>Total repaid amount</h6>
            </div>
          </div>
          <h5>
            <span className="currency">&#8358;</span>15, 000.00
          </h5>
        </div>
      </div>
      <div className="StatsCard color3">
        <div className="total-loans">
          <div className="logo">
            <FaMoneyBill />
          </div>
          <div className="eye">
            <FaEye />
          </div>
          <div className="content">
            <div className="total">
              <h6>Loan balance</h6>
            </div>
            <h5>
              <span className="currency">&#8358;</span>135, 000.00
            </h5>
          </div>
        </div>
      </div> */}
      <div className="container text-center">
        <div className="row">
          <div className="col-4 ">
            <div className="total-loans">
              <div className="logo">
                <FaWallet />
              </div>
              <div className="content">
                <div className="total">
                  <h6>Total loans amount</h6>
                </div>
                <h5>
                  <span className="currency">&#8358; </span>150, 000.00
                </h5>
              </div>
              <div className="eye">
                <FaEye />
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4">
            <div className="total-repaid">
              <div className="logo">
                <FaPercent />
              </div>
              <div className="content">
                <div className="total">
                  <h6>Total repaid amount</h6>
                </div>
                <h5>
                  <span className="currency">&#8358; </span>15, 000.00
                </h5>
              </div>
              <div className="eye">
                <FaEye />
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4">
            <div className="loan-balance">
              <div className="logo">
                <FaMoneyBill />
              </div>
              <div className="content">
                <div className="total">
                  <h6>Loan balance</h6>
                </div>
                <h5>
                  <span className="currency">&#8358; </span>135, 000.00
                </h5>
              </div>
              <div className="eye">
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
