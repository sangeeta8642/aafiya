import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../CSS files/sections/PatientStories.css";
import video from "../assets/video.mp4";
import dr1 from "../assets/dr1.webp";

const PatientStories = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    dots: true,
    // autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <section className="stories" style={{ width: "950px" }}>
      <h2>
        Patient Stories & Videos <span className="dot">.</span>
      </h2>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <h4>Underwent procedure for retinal detachment</h4>
          <video width="300" height="400" controls autoPlay loop>
            <source src={video} height="400" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="carddetails">
            <img src={dr1} alt="" width="50px" height={50} />
            <div className="drdetails">
              <h5>Luke Olfert</h5>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
        <div className="item">
          <h4>Underwent procedure for retinal detachment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed
            est aliquam, pulvinar nibh vel,.stories .item.stories .item.stories
            .item.stories .item.stories .itemAenean efficitur ante lacus, vitae
            semper lectus ultrices nec.Aenean efficitur ante lacus, vitae semper
            lectus ultrices nec.
          </p>
          <div className="carddetails">
            <img src={dr1} alt="" width="50px" height={50} />
            <div className="drdetails">
              <h5>Luke Olfert</h5>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
        <div className="item">
          <h4>Underwent procedure for retinal detachment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed
            est aliquam, pulvinar nibh vel,.stories .item.stories .item.stories
            .item.stories .item.stories .itemAenean efficitur ante lacus, vitae
            semper lectus ultrices nec.Aenean efficitur ante lacus, vitae semper
            lectus ultrices nec.
          </p>
          <div className="carddetails">
            <img src={dr1} alt="" width="50px" height={50} />
            <div className="drdetails">
              <h5>Luke Olfert</h5>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
        <div className="item">
          <h4>Underwent procedure for retinal detachment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed
            est aliquam, pulvinar nibh vel,.stories .item.stories .item.stories
            .item.stories .item.stories .itemAenean efficitur ante lacus, vitae
            semper lectus ultrices nec.Aenean efficitur ante lacus, vitae semper
            lectus ultrices nec.
          </p>
          <div className="carddetails">
            <img src={dr1} alt="" width="50px" height={50} />
            <div className="drdetails">
              <h5>Luke Olfert</h5>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
        <div className="item">
          <h4>Underwent procedure for retinal detachment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed
            est aliquam, pulvinar nibh vel,.stories .item.stories .item.stories
            .item.stories .item.stories .itemAenean efficitur ante lacus, vitae
            semper lectus ultrices nec.Aenean efficitur ante lacus, vitae semper
            lectus ultrices nec.
          </p>
          <div className="carddetails">
            <img src={dr1} alt="" width="50px" height={50} />
            <div className="drdetails">
              <h5>Luke Olfert</h5>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
      
        {/* </div> */}
        {/* Add more items as needed */}
      </OwlCarousel>
    </section>
  );
};

export default PatientStories;
