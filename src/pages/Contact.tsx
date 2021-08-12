import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstname, setFirstname] = useState<any | null>(null);
  const [lastname, setLastname] = useState<any | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subject, setSubject] = useState<any | null>(null);
  const [phone, setPhone] = useState<any | null>(null);
  const [message, setMessage] = useState<any | null>(null);

  const [position, setPosition] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
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
                <input
                  type="text"
                  className="contact-us-input-area"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              {position ? (
                <>
                  <div className="contact-us-input-label">
                    <label>Subject*</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="contact-us-input-area"
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="contact-us-input-label">
                    <label>Last name*</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="contact-us-input-area"
                      required
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="contact-us-column">
            <div className="contact-us-input-each">
              {position ? (
                <>
                  <div className="contact-us-input-label">
                    <label>Last name*</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="contact-us-input-area"
                      required
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="contact-us-input-label">
                    <label>Subject*</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="contact-us-input-area"
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
              <div className="contact-us-input-label">
                <label>Phone number</label>
              </div>
              <div>
                <input
                  type="number"
                  className="contact-us-input-area"
                  required
                  onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div>
          <br />
          <br />
          <a
            href={`mailto:muhammad.hadi93@ui.ac.id?subject=${subject}&body=Perkenalkan, saya ${firstname} ${lastname}, dengan nomor telepon ${phone}. ${message}`}
            className="contact-us-email-button"
          >
            Email us
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
