import React from "react";
import "../CSS files/Navbar.css";
import { Navbar_links } from "./index";

function Navbar() {
  return (
    <section className="NavBar">
      <div className="navlinks">
        {Navbar_links.map((link) => (
          <a href="#" key={link.title}>{link.title}</a>
        ))}
      </div>
      <div className="search">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1.7em"
          width="1.7em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p>Search</p>
      </div>
    </section>
  );
}

export default Navbar;
