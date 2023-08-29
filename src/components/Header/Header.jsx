import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="tagline">
        <h1>
          {" "}
          <span className="revlutionize">Revlutionize</span> retail with
          <span className="otw">  On The Way </span>  Autonomous shopping
        </h1>
      </div>
    </header>
  );
};

export default Header;
