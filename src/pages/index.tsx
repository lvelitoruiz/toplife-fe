import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Slider from "../components/Slider";
import Asesors from "../components/Asesors";
import Project from "../components/Proyecto";
import Characteristics from "../components/Characteristics";
import Galleries from "../components/Galleries";
import Header from "../components/Header";
import Ubication from "../components/Ubication";
import Footer from "../components/Footer";
import Form from "../components/Form";

const IndexPage: React.FC<PageProps> = () => {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header fixed={scrollPosition > 0} />

      <Slider />

      <Project />

      <Characteristics />

      <Galleries />

      <Ubication />

      <Form />

      <Asesors />
      <Footer />
      
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
