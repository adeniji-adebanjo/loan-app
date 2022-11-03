import React from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import { Navbar } from "./components/NavbarComponents/Navbar";
// import PaymentDate from "./components/NextPayComponents/PaymentDate";
// import StatsCard from "./components/CardComponents/StatsCard";
// import LoanHistoryCard from "./components/CardComponents/LoanHistoryCard";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
