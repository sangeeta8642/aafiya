import { useState,useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Navbar2 from "./components/Navbar2";
import Overview from "./sub-components/Overview";
import Eligibility from "./sub-components/Eligibility";
import Preparation from "./sub-components/Preparation";
import About from "./sub-components/About";
import PostTreatment from "./sub-components/PostTreatment";
import Recovery from "./sub-components/Recovery";
import FAQ from "./sub-components/FAQ";
import PatientStories from "./sub-components/PatientStories";
import SubComp from "./components/SubComp";
import Footer from "./components/Footer";
import { subcomp } from "./components";
import Doctors from "./components/Doctors";
import Hospitals from "./components/Hospitals";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
// import $ from 'jquery';

// Make jQuery globally available
// window.$ = $;
// window.jQuery = $;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this timeout as needed
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Header />
      <Navbar />
      <Home />
      <Navbar2 />
      <Overview />

      {/* <Eligibility/> */}
      {/* <Preparation/> */}
      {/* <About/> */}
      {/* <PostTreatment></PostTreatment> */}
      {/* <Recovery></Recovery> */}
      {/* <FAQ></FAQ> */}
      <Main />
      {/* <PatientStories></PatientStories> */}
      <Doctors />
      <Hospitals />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
