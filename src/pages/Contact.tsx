import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="banner">CONTACT US!</div>
      </div>
      <div className="contact-us-container">
        <div className="contact-us-title">Contact form</div>
        <div className="contact-us-row">
          <div className="contact-us-column">
            <div className="contact-us-input-each">
              <div className="contact-us-input-label">
                <label>First name*</label>
              </div>
              <div>
                <input type="text" className="contact-us-input-area" required />
              </div>
              <div className="contact-us-input-label">
                <label>Email*</label>
              </div>
              <div>
                <input
                  type="email"
                  className="contact-us-input-area"
                  required
                />
              </div>
            </div>
          </div>
          <div className="contact-us-column">
            <div className="contact-us-input-each">
              <div className="contact-us-input-label">
                <label>Last name*</label>
              </div>
              <div>
                <input type="text" className="contact-us-input-area" required />
              </div>
              <div className="contact-us-input-label">
                <label>Phone number</label>
              </div>
              <div>
                <input
                  type="number"
                  className="contact-us-input-area"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-message">
          <div className="contact-us-input-label">
            <label>Message*</label>
          </div>
          <div>
            <textarea
              placeholder="Masukkan pesan anda"
              className="contact-us-input-message"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="contact-us-email-button"
            onClick={() => alert("Still on development.")}
          >
            Email us
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
