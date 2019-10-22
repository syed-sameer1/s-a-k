import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Team from "./Components/Team/Team";
import ReadMore from "./Components/Team/ReadMore/ReadMore";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      {/* <About /> */}
      {/* <Team /> */}
      {/* <ReadMore /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
