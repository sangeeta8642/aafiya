import React from "react";
import "../CSS files/Home.css";
import bg1 from "../assets/bg1.avif";
import knee from "../assets/kneereplacement.jpg"

function Home() {
  return (
    <section className="home">
      <div>
        <h3>
          Home <span>{">"}</span>Treatmet<span>{">"}</span>Orthopaedics
          <span>{">"}</span>Knee replacement
        </h3>
        <h2>Total Knee Replacement</h2>
        <p>
          Total knee replacement is a surgery to remove and replace the whole
          damanged knee joint with an artificial joint
        </p>
        <button>Enquire now</button>
      </div>
      
    </section>
  );
}

export default Home;
