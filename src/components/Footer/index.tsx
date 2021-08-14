import React from "react";
import logo from "../../assets/footer/logo.png";
import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-row-outer">
          <div className="footer-column-outer">
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
          <div className="footer-column-outer">
            <div className="footer-column-right">
              <span className="footer-logo-col-name">Contacts</span>
              <br />
              <br />
              <div className="footer-contacts">admin@covent.id</div>
            </div>
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
