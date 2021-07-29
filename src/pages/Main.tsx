import React from "react";
import "./Main.css";
import ventilator from "../assets/main/covent.png";
import logo from "../assets/main/logo.png";

const Main = () => {
  return (
    <>
      <div className="row hero-color">
        <div className="column">
          <div>
            <div className="column left ">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="column right logo-text">
              <b>COVENT</b>
              <br />
              INDONESIA
            </div>
          </div>
          <div className="description-hero">
            INDONESIA'S FIRST LOCALLY DESIGNED <br />
            AND PRODUCED VENTILATOR
          </div>
        </div>
        <div className="column">
          <img className="image-hero" src={ventilator} alt="ventilator" />
        </div>
      </div>
      <div>Hellow</div>
    </>
  );
};

export default Main;
