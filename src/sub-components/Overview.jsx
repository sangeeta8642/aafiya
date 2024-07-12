import React from "react";
import "../CSS files/Overview.css"
import image1 from "../assets/image1.jfif"

const Overview = () => {
  return (
    <section className="overview">
      <div className="div1">
      <h2>Treatment Overview<span className="dot">.</span></h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed est
        aliquam, pulvinar nibh vel,
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur ante lacus, vitae semper lectus ultrices nec. Quisque sed est
        aliquam, pulvinar nibh vel, hendrerit sapien. Sed fringilla auctor ante,
        at accumsan arcu ultricies et. Fusce id posuere tortor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur ante lacus, vitae semper lectus ultrices nec. 
      </p>
      </div>
      <div className="div2">
    <img src={image1} alt={image1} width="600px" />
      </div>
    </section>
  );
};

export default Overview;
