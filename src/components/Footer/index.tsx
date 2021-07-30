import React from "react";
import logo from "../../assets/footer/logo.png";
import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="row">
          <div className="column">
            <div className="footer-row">
              <div className="footer-column">
                <img src={logo} alt="logo" width="100" />
              </div>
              <div className="footer-column">
                <div className="footer-logo-title">
                  <span className="footer-logo-title-bold">COVENT</span>
                  <br />
                  INDONESIA
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <span className="footer-logo-col-name">Contacts</span>
            <br />
            <br />
            admin@covent.id
          </div>
        </div>
        <div className="rights">
          © 2020 Covent Indonesia. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
