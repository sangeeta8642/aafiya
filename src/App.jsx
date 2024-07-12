import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Navbar2 from "./components/Navbar2";
import Overview from "./sections/Overview";
import Doctors from "./sections/Doctors";
import Hospitals from "./sections/Hospitals";
import Footer from "./sections/Footer";
import Main from "./sections/Main";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Header />
      <Navbar />
      <Home />
      <Navbar2 />
      <Overview />
      <Main />
      <Doctors />
      <Hospitals />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
