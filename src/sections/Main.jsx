import React from "react";
import SubComp from "../components/SubComp";
import FAQ from "../sections/FAQ";
import { subcomp } from "../components";
import Form from "../components/Form";
import "../CSS files/sections/main.css"
import PatientStories from "../sections/PatientStories";
const Main = () => {
  return (
    <section className="main">
      <div style={{width:"55%"}}>
        {subcomp.map((comp) => (
          <SubComp title={comp.title} key={comp.title} />
        ))}
        <FAQ />
        <PatientStories/>
      </div>
      <div style={{width:"35%"}}>
        <Form/>
      </div>
    </section>
  );
};

export default Main;
