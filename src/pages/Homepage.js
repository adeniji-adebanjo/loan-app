import React from "react";
// import { Link } from "react-router-dom";

//components
import { Navbar } from "../components/NavbarComponents/Navbar";
import StatsCards from "../components/CardComponents/StatsCard";
import LoanHistoryCards from "../components/CardComponents/LoanHistoryCard";
// import { RepaymentPlanCards } from "../components/CardComponents/RepaymentPlanCard";
// import { Buttons } from "../components/NavbarComponents/Buttons";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <StatsCards />
      <LoanHistoryCards />
      {/* <Buttons /> */}
      {/* <RepaymentPlanCards /> */}
    </div>
  );
};

export default Homepage;
