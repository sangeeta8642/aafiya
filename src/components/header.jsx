import React from "react";
import "../CSS files/header.css";
import logo from "../assets/logo.jfif";
import medical from "../assets/medical_logo.jfif";
import { header_icons } from "./index";
import UK from "../assets/united-kingdom.png";
import LazyImage from "./LazyImage";

const header = () => {
  return (
    <section className="header">
      <div className="logo">
        <LazyImage src={logo} alt="logo" width="300" height="80" />
        <LazyImage src={medical} alt="logo" width="70" height="70" />
      </div>
      <div className="header_icons">
        {header_icons.map((header, i) => (
          <div key={i} className="header_icons">
            <div>
              <LazyImage
                src={header.image}
                alt={header.text}
                width={header.width}
                height="38"
              />
            </div>
            <div className="header_text">
              <p>{header.caption}</p>
              <h3 style={{marginTop: "-20px" }}>
                {header.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <LazyImage src={UK} alt="UK Flag" width="50" height="50" />
    </section>
  );
};

export default header;
