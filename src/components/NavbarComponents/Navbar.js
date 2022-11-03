import React from "react";
import Buttons from "./Buttons";
import "./index.css";

export const Navbar = () => {
  return (
    // <div className="navbar">
    //   <h2>Loans</h2>
    //   <Buttons />
    // </div>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Loans</div>
        <form className="justify-content-end">
          <button className="btn btn-outline-success me-2" type="button">
            Make a payment
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            Liquidate loans
          </button>
        </form>
      </div>
      <div className="container navbar payment-date justify-content-end">
        <span className="navbar-text">Next payment, 30 Mar 2022</span>
      </div>
    </nav>
    // <h5>working!</h5>
  );
};

// export default Navbar;
