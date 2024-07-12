import React from "react";
import SubComp from "./SubComp";
import FAQ from "../sub-components/FAQ";
import { subcomp } from ".";
import Form from "./Form";
import "../CSS files/main.css"
import PatientStories from "../sub-components/PatientStories";
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
