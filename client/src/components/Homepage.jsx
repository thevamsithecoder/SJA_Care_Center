import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Whyus from "./Whyus";
import Gallery from "./Gallery";
import Clientfeedback from "./Clientfeedback";
import Getintouch from "./Getintouch";
import Map from "./Map";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Services />
      <Aboutus />
      <Whyus />
      <Gallery />
      <Clientfeedback />
      <Getintouch />
      <Map />
    </>
  );
};

export default Homepage;
