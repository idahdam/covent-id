import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import ventilator from "../assets/main/covent.png";
import logo from "../assets/main/logo.png";
import pakbasari from "../assets/main/pakbasari.png";
import rnd from "../assets/main/rnd.png";
import device from "../assets/main/medical-device.png";
import software from "../assets/main/healthcare-software-dev.png";
import indonesia from "../assets/main/indonesia.png";

const Main = () => {
  return (
    <>
      <div className="home-hero-container">
        <div className="row hero-color">
          <div className="column">
            <div>
              <div className="column left">
                <img src={logo} alt="logo" className="logo" loading="lazy" />
              </div>
              <div className="column right logo-text">
                <span className="hero-title-bold">COVENT</span>
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
      </div>
      <div className="home-container">
        <div className="main-container">
          <div className="main-row">
            <div className="main-column">
              <img
                src={pakbasari}
                alt="foto pak basari"
                loading="lazy"
                className="main-image"
              />
            </div>
            <div className="main-column">
              <div className="main-column-text">
                <div className="main-title">WHO WE ARE</div>
                <div className="main-description">
                  Covent Indonesia merupakan sebuah tim yang berawal dari para
                  engineers dan researchers dengan keingininan untuk
                  mengembangkan Indonesia lewat potensi lokal yang ada,
                  khususnya dibidang healthcare.
                </div>
                <div className="main-description">
                  Pada tahun 2020, kami berhasil merancang dan memproduksi
                  sebuah ventilator lokal pertama di Indonesia yang telah lulus
                  uji klinis dan kami merupakan tim pertama yang meluncurkan
                  produk kami ke rumah sakit di seluruh Indonesia. Tak berhenti
                  sampai disitu, kami akan terus membentangkan sayap kami demi
                  tercapainya visi Covent Indonesia memajukan bangsa dan negara.
                </div>
                <div className="main-description-button">
                  <Link to="/about" className="button">
                    Get to know our journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="second-main-row">
            <div>
              <div className="second-main-row-title">WHAT WE DO</div>
              <div className="second-main-row-desc">
                Saat ini kami terus melakukan berbagai riset, pengembangan,
                perancangan serta pembuatan alat dan perangkat lunak untuk
                pelayanan kesehatan sebagai upaya kami untuk mengambangkan
                potensi lokal Indonesia di bidang kesehatan.
              </div>
              <div className="second-main-row-photos">
                <div className="second-main-row-photos-row">
                  <div className="second-main-row-photos-column">
                    <div className="second-main-row-photos-css">
                      <img
                        src={rnd}
                        alt="1"
                        loading="lazy"
                        className="second-main-row-photos-each-css"
                      />
                    </div>
                    <span className="second-main-row-photos-name">
                      Research and Development
                    </span>
                  </div>
                  <div className="second-main-row-photos-column">
                    <div className="second-main-row-photos-css">
                      <img
                        src={device}
                        alt="1"
                        loading="lazy"
                        className="second-main-row-photos-each-css"
                      />
                    </div>
                    <span className="second-main-row-photos-name">
                      Medical Device Prototyping
                    </span>
                  </div>
                  <div className="second-main-row-photos-column">
                    <div className="second-main-row-photos-css">
                      <img
                        src={software}
                        alt="1"
                        loading="lazy"
                        className="second-main-row-photos-each-css"
                      />
                    </div>
                    <span className="second-main-row-photos-name">
                      Healthcare Software Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="third-main-row">
            <div>
              <div className="third-main-row-title">OUR VISION</div>
              <div className="third-main-row-content">
                <div className="third-main-row-content-row">
                  <div className="third-main-row-content-column third-left">
                    <div className="third-main-row-content-column-text">
                      <div className="third-main-row-content-column-text-width">
                        Seiring dengan perkembangan Society 5.0, kami percaya
                        bahwa sebuah sistem pelayanan kesehatan yang
                        terintegrasi dan terinterkoneski akan menjadi bagian
                        penting dari masa depan.
                      </div>
                    </div>
                    <div className="third-main-row-content-column-text-2">
                      We are aiming to be the enabler of Indonesia’s medical
                      ecosystem in 2025
                    </div>
                  </div>
                  <div className="third-main-row-content-column third-right">
                    <div className="third-main-row-content-column-map">
                      <img
                        src={indonesia}
                        className="third-main-row-content-map-img"
                        alt="peta indonesia dengan logo covent uwu"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
