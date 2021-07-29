import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import ventilator from "../assets/main/covent.png";
import logo from "../assets/main/logo.png";
import pakbasari from "../assets/main/pakbasari.png";

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
      <div className="main-container">
        <div className="main-row">
          <div className="main-column">
            <img src={pakbasari} alt="foto pak basari" />
          </div>
          <div className="main-column">
            <div className="main-title">WHO WE ARE</div>
            <div className="main-description">
              Covent Indonesia merupakan sebuah tim yang berawal dari para
              engineers dan researchers dengan keingininan untuk mengembangkan
              Indonesia lewat potensi lokal yang ada, khususnya dibidang
              healthcare.
            </div>
            <div className="main-description">
              Pada tahun 2020, kami berhasil merancang dan memproduksi sebuah
              ventilator lokal pertama di Indonesia yang telah lulus uji klinis
              dan kami merupakan tim pertama yang meluncurkan produk kami ke
              rumah sakit di seluruh Indonesia. Tak berhenti sampai disitu, kami
              akan terus membentangkan sayap kami demi tercapainya visi Covent
              Indonesia memajukan bangsa dan negara.
            </div>
            <div className="main-description-button">
              <Link to="/about" className="button">
                Get to know our journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
