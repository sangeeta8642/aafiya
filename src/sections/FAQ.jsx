import React, { useState } from "react";
import { faqQs } from "../components";
import "../CSS files/sections/FAQ.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="faq" >
      <h2>
        Treatment FAQs <span className="dot">.</span>
      </h2>

      <table style={{listStyle:"none",borderCollapse:"collapse"}}>
        <tr>
        {faqQs.map((item, i) => (
          <div className="faq-item" key={i}>
            <th style={{border:"3px solid #38a4ec",borderLeft:"none",borderRight:"none"}}>
              <h4 className="FAQ-Q" onClick={() => toggleAnswer(i)}>
                {expanded === i ? (
                  <span className={`${expanded === i ? "expanded" : ""}`}>
                    -
                  </span>
                ) : (
                  <span className={`${expanded === i ? "expanded" : ""}`}>
                    +
                  </span>
                )}
                {item.q}
              </h4>
            </th>
            <div className={`faq-answer ${expanded === i ? "expanded" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur ante lacus, vitae semper lectus ultrices nec. Quisque
              sed est aliquam, pulvinar nibh vel, hendrerit sapien. Sed
              fringilla auctor ante, at accumsan arcu ultricies et.
            </div>
          </div>
        ))}
        </tr>
      </table>
    </div>
  );
};

export default FAQ;
