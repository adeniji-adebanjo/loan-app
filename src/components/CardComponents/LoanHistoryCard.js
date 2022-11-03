import React from "react";
import "./index.css";
import loanhistory from "../../data/loan_history.json";

const LoanHistory = () => {
  return (
    <>
      <div className="loan-details">
        <div className="row">
          <div className="col">
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
          <div class="row">
            <div className="col">
              <div class="repayment-schedule">
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
        {/* <div class="row"> */}
        {/* <div className="col">
          <div class="repayment-schedule">
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
              <button btn-primary btn-success>
                Paid
              </button>
            </div>
          </div>
        </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div class="row">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div> */}
      </div>

      {/* <section className="loan-history">
        <div className="loan-history card1">
          <div className="card-title">
            <h3>Loan History</h3>
          </div>
          <div className="card-info">
            <div className="card-balance">
              <h3>
                <span>&#8358;</span>2,000 000.00
              </h3>
            </div>
            <div className="card-info">
              <div className="card-info-details ">
                <h5>Interest rate:</h5>
                <h3>4.5%</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
