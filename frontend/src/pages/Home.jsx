import React from "react";
import TopNavbar from "../components/TopNavbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="w-full h-auto bg-red-400 flex flex-col">
      <TopNavbar />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
