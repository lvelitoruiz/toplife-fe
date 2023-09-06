import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const about = () => {

  return (
    <>
      <Header fixed={true} />
      <AboutUs />
      <Footer />
    </>
  );
};

export default about;
