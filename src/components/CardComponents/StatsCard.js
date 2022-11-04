import React from "react";
import "./index.css";
import { FaWallet, FaEye, FaPercent, FaMoneyBill } from "react-icons/fa";

const StatsCard = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 ">
            <div className="total-loans">
              <div className="logo1">
                <FaWallet />
              </div>
              <div className="content">
                <div className="total1">
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
          <div className="col-lg-4 col-md-6">
            <div className="total-repaid">
              <div className="logo2">
                <FaPercent />
              </div>
              <div className="content">
                <div className="total2">
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
          <div className="col-lg-4 col-md-6">
            <div className="loan-balance">
              <div className="logo3">
                <FaMoneyBill />
              </div>
              <div className="content">
                <div className="total3">
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
