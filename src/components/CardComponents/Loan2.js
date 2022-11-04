import React, { useState } from "react";
import "./index.css";
import loanhistory from "../../data/loan_history.json";

const LoanHistory = () => {
    const [loan-card] = useState([
        {
            cardDetails: '&#8358; 2, 000, 000.00',
            interestRate: '4.5%',
            firstPayment: 'Jan 26, 2022',
            loanDuration: '6 months'
        },
        {
            cardDetails: '&#8358; 5, 000, 000.00',
            interestRate: '4.5%',
            firstPayment: 'Jan 26, 2022',
            loanDuration: '6 months'
        },
        {
            cardDetails: '&#8358; 3, 500, 000.00',
            interestRate: '4.5%',
            firstPayment: 'Jan 26, 2022',
            loanDuration: '6 months'
        }
    ])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4 loan-card">
            <div className="card-title">
              <h3>Loan History</h3>
            </div>
            {
                cardDetails.map((card-details.i) => (

            <div key={i} className="card-details">
              <h5>
                { card-details.cardDetails }
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
                ))
            }
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

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
            <div className="card-title">
              <h3>Loan History</h3>
            </div>
            <div className="card-details">
              <div className="card-amount">
                <h5>
                  <span>&#8358;</span>2,000, 000.00
                </h5>
                {/* </div> */}
                <div className="card-rates">
                  <div className="interest-rate">
                    <h6>Interest rate</h6>
                    <p>4.5%</p>
                  </div>
                  <div className="first-payment">
                    <h6>First-payment</h6>
                    <p>Jan 26, 2022</p>
                  </div>
                  <div className="loan-duration">
                    <h6>Loan duration</h6>
                    <p>6 months</p>
                  </div>
                </div>
                <hr />
                <div className="status">
                  <h3>Status: </h3>
                  <button className="btn-status">Ongoing</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="loan-details">
          <div className="row">
            <div className="col">
              <div className="repayment-schedule">
                <h3>Repayment Schedule</h3>
                <p>showing schedule for ongoing loan</p>
              </div>
              <div className="loan-activities">
                <div className="payment-details">
                  <h6>January 26, 2022</h6>
                  <h4>
                    <span>&#8358;</span>2,000, 000.00
                  </h4>
                </div>
                <div className="payment-status">
                  <button className="btn-primary btn-success">Paid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      
    </>
  );
};

// let LoanHistoryCard = () => {
//   return (
//     <div>
//       {loanhistory.loan -
//         history.map((singlecard) => {
//           return <div className="col-lg-4" key={singlecard.id}></div>;
//         })}
//     </div>
//   );
// };

export default LoanHistory;
