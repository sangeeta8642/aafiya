import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import apollo from "../assets/apollo2.webp";
import medanta from "../assets/medanta.jpg";
import jaslok from "../assets/jaslok.jfif"
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../CSS files/sections/Hospitals.css";
import LazyImage from "../components/LazyImage";

function Hospitals() {
  const options = {
    dots: true,
    responsiveClass: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section
      className="hospitals"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <h2>Hospitals</h2>
      <h3>
        Recommended <span style={{ color: "#38a4ec" }}>Hospitals</span>
      </h3>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="subcard">
            <LazyImage src={apollo} alt={apollo} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={medanta} alt={medanta} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={jaslok} alt={jaslok} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={apollo} alt={apollo} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={medanta} alt={medanta} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={jaslok} alt={jaslok} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={apollo} alt={apollo} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={medanta} alt={medanta} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={jaslok} alt={jaslok} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={apollo} alt={apollo} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={medanta} alt={medanta} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
        <div className="item">
          <div className="subcard">
            <LazyImage src={jaslok} alt={jaslok} />
          </div>
          <div className="details">
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <h2>Dr.Faique Falke</h2>
          </div>
        </div>
       
      </OwlCarousel>
    </section>
  );
}

export default Hospitals;
