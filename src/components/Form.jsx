import React from "react";
import "../CSS files/Form.css";

const Form = () => {
  return (
    <section className="form">
      <h2>Need Help?</h2>
      <p>Just let us know. we will be happy to assist you.</p>
      <div className="formdiv">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input style={{height:"5rem"}} type="text" placeholder="Decribe your treatment requirement" />
        <button>Send Enquiry</button>
      </div>
    </section>
  );
};

export default Form;
