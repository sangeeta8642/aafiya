import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../CSS files/Doctors.css";

function Doctors() {
  const options = {
    // margin:20,
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
      className="doctors"
      style={{ width: "100vw", textAlign: "center" }}
    >
      <h2>Doctors</h2>
      <h3>
        Top Orthopaedic <span style={{ color: "#38a4ec" }}>Doctors</span>
      </h3>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>

        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>
        <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div> <div className="item">
          <div className="subcard"></div>
          <div className="details">
            <h2>Dr.Faique Falke</h2>
            <h5>Mussaffah Industrial - Abu Dhabi</h5>
            <p>Doctor Degree & Specialist</p>
          </div>
        </div>

      </OwlCarousel>
    </section>
  );
}

export default Doctors;
