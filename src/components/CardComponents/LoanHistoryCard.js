import React from "react";
import "./index.css";
import loanhistory from "../../data/loan_history.json";

const LoanHistory = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 loan-card">
            <div className="card-title">
              <h3>Loan History</h3>
            </div>
            <div className="card-details">
              <h5>
                <span>&#8358;</span>2,000, 000.00
              </h5>
              <div className="d-flex justify-content-between">
                {" "}
                <div className="loan-history">
                  <h6>Interest Rate</h6>
                  <p>4.5%</p>
                </div>
                <div className="loan-history">
                  <h6>First Payment</h6>
                  <p>Jan 26, 2022</p>
                </div>
                <div className="loan-history">
                  <h6>Loan Duration</h6>
                  <p>6 months</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <h6 className="text">Status: </h6>
                <button className="btn-status">Ongoing</button>
              </div>
            </div>
            <div className="card-details">
              <h5>
                <span>&#8358;</span>5,000, 000.00
              </h5>
              <div className="d-flex justify-content-between">
                {" "}
                <div className="loan-history">
                  <h6>Interest Rate</h6>
                  <p>4.5%</p>
                </div>
                <div className="loan-history">
                  <h6>First Payment</h6>
                  <p>Jan 26, 2022</p>
                </div>
                <div className="loan-history">
                  <h6>Loan Duration</h6>
                  <p>12 months</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <h6 className="text">Status: </h6>
                <button className="btn-status">Ongoing</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 loan-details">
            <div className="card-title">
              <h3>Repayment Schedule</h3>
              <p>showing schedule for ongoing loan</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              {" "}
              <div className="payment-details">
                <h6>January 26, 2022</h6>
                <p>
                  <span>&#8358;</span>2,000, 000.00
                </p>
              </div>
              <div className="">
                <button className="btn-success">Paid</button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              {" "}
              <div className="payment-details">
                <h6>January 26, 2022</h6>
                <p>
                  <span>&#8358;</span>2,000, 000.00
                </p>
              </div>
              <div className="">
                <button className="btn-success">Paid</button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              {" "}
              <div className="payment-details">
                <h6>January 26, 2022</h6>
                <p>
                  <span>&#8358;</span>2,000, 000.00
                </p>
              </div>
              <div className="">
                <button className="btn-success">Paid</button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              {" "}
              <div className="payment-details">
                <h6>January 26, 2022</h6>
                <p>
                  <span>&#8358;</span>2,000, 000.00
                </p>
              </div>
              <div className="">
                <button className="btn-success">Paid</button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanHistory;
