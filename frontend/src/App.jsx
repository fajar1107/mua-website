import React from "react";
// import ImageSlider from "./components/ImageSlider";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="debug-screens">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
