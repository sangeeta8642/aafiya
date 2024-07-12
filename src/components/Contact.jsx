import React from "react";
import "../CSS files/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h5>
        Don't hesitate, contact us for better help and services.{" "}
        <span style={{ color: "red", textDecoration: "underline" }}>
          Explore all Hospitals
        </span>
      </h5>
      <div className="div">
        <h5>Stay Stong and healthy to enjoy life</h5>
        <h2>We have team of healthcare experts</h2>
        <div className="buttomdiv">
          <button>Get in touch</button>
          <h3>+91 898 777 9999</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
