import React, { useEffect } from "react";

import Reclamations from "../components/reclamations";
import Header from "../components/Header";
import Footer from "../components/Footer";

const reclamaciones = () => {
  
  return (
    <>
      <Header fixed={true} />
      <Reclamations />
      <Footer />
    </>
  );
};

export default reclamaciones;
