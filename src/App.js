import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Team from "./Components/Team/Team";
import SeemaAbidi from "./Components/Team/ReadMore/SeemaAbidi";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import AliAbbas from "./Components/Team/ReadMore/AliAbbas";
import KazimRaza from "./Components/Team/ReadMore/KazimRaza";
import HassanAbidi from "./Components/Team/ReadMore/HassanAbidi";
import MohsinKhan from "./Components/Team/ReadMore/MohsinKhan";

function App() {
  return (
    <>
      <Navigation />
      <About />
      {/* <Team /> */}
      {/* <SeemaAbidi />
      <AliAbbas />
      <KazimRaza />
      <HassanAbidi />
      <MohsinKhan /> */}
      {/* <Contact /> */}
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
