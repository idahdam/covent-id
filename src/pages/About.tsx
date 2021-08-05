import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img1 from "../assets/about/1.png";
import img2 from "../assets/about/2.png";
import img3 from "../assets/about/3.png";
import img4 from "../assets/about/4.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="banner">THIS IS HOW WE START OUR JOURNEY</div>
      </div>
      <VerticalTimeline className="vertical-timeline-color">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          iconStyle={{ background: "#ffcc00", color: "yellow" }}
        >
          <div className="about-us-each-content">
            <img src={img1} alt="asd" className="about-us-each-image" />
            <div className="about-us-each-title-left">SEJAK TAHUN 2011,</div>
            <div className="about-us-each-description">
              Kami telah merancang alat kesehatan yang memenuhi persyaratan yang
              berlaku di Indonesia. Kami menyadari bahwa{" "}
              <span className="about-us-each-description-bold">
                jumlah penduduk di Indonesia
              </span>{" "}
              yang menempati urutan{" "}
              <span className="about-us-each-description-bold">
                ke-4 terbanyak di dunia
              </span>{" "}
              memperbesar potensi pasar, khususnya dalam{" "}
              <span className="about-us-each-description-bold">
                Industri Pelayanan Kesehatan.
              </span>{" "}
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffcc00", color: "#ffcc00" }}
          // icon={<WorkIcon />}
        >
          <div className="about-us-each-content">
            <img src={img2} alt="asd" className="about-us-each-image" />
            <div className="about-us-each-title-right">PANDEMI COVID-19</div>
            <div className="about-us-each-description">
              Keberadaan pandemi COVID-19 memperbesar peluang kami untuk
              berinovasi. Melalui ventilator bernama{" "}
              <span className="about-us-each-description-bold">COVENT-20</span>{" "}
              yang kami rancang, inovasi kami berhasil menjangkau{" "}
              <span className="about-us-each-description-bold">
                215 rumah sakit
              </span>{" "}
              di{" "}
              <span className="about-us-each-description-bold">
                29 provinsi
              </span>{" "}
              di Indonesia. COVENT-20 saat ini menjadi{" "}
              <span className="about-us-each-description-bold">
                ventilator pertama
              </span>{" "}
              yang dirancang dan diproduksi secara lokal di Indonesia.
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffcc00", color: "#ffcc00" }}
          // icon={<WorkIcon />}
        >
          <div className="about-us-each-content">
            <img src={img3} alt="asd" className="about-us-each-image" />
            <div className="about-us-each-title-left">PATIENT SAFETY</div>
            <div className="about-us-each-description">
              Kami menyadari bahwa{" "}
              <span className="about-us-each-description-bold">
                keselamatan pasien
              </span>{" "}
              merupakan hal yang sangat penting dalam dunia kesehatan.
              Sayangnya, hal ini masih kurang diperhatikan oleh banyak orang.
              Bersama Covent Indonesia, kami bertekad untuk{" "}
              <span className="about-us-each-description-bold">
                mewujudkan solusi
              </span>{" "}
              dari masalah tersebut demi berkembangnya pelayanan kesehatan di
              Indonesia.
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffcc00", color: "#ffcc00" }}
          // icon={<WorkIcon />}
        >
          <div className="about-us-each-content">
            <img src={img4} alt="asd" className="about-us-each-image" />
            <div className="about-us-each-title-right">
              TUMBUH DAN BERKEMBANG
            </div>
            <div className="about-us-each-description">
              Saat ini tim kami masih terus mengembangkan{" "}
              <span className="about-us-each-description-bold">
                fitur dari ventilator
              </span>{" "}
              yang telah kami buat agar tetap dapat bersaing dengan ventilator
              lain setelah pandemi. Kami memfokuskan riset kami ke arah{" "}
              <span className="about-us-each-description-bold">
                pengembangan keselamatan pasien.
              </span>
            </div>
            <div className="about-us-each-description">
              Selain itu, kami juga mengerjakan{" "}
              <span className="about-us-each-description-bold">
                riset berbasis produk
              </span>{" "}
              alat kesehatan untuk digunakan pada rumah sakit universitas dan
              para dokter.
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="about-us-map">
        <div className="about-us-map-row">
          <div className="about-us-map-column map-left">
            <div className="about-us-map-iframe"></div>
          </div>
          <div className="about-us-map-column map-right">
            <div className="about-us-map-text">PETA PERSEBARAN COVENT-20</div>
          </div>
        </div>
      </div>
      <div className="about-us-news">
        <div className="about-us-medpar-text">
          WATCH THE NEWS FROM OUR MEDIA PARTNER
        </div>
        <div className="about-us-news-row">
          <div className="about-us-news-column">
            <div className="about-us-news-medpar"></div>
          </div>
          <div className="about-us-news-column">
            <div className="about-us-news-medpar"></div>
          </div>
          <div className="about-us-news-column">
            <div className="about-us-news-medpar"></div>
          </div>
        </div>
      </div>
      <div className="about-us-documentation"></div>
    </>
  );
};

export default About;
