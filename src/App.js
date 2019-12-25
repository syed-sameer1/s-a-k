import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import Team from "./Components/Team/Team";
import SeemaAbidi from "./Components/Team/ReadMore/SeemaAbidi";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import AliAbbas from "./Components/Team/ReadMore/AliAbbas";
import KazimRaza from "./Components/Team/ReadMore/KazimRaza";
import HassanAbidi from "./Components/Team/ReadMore/HassanAbidi";
import MohsinKhan from "./Components/Team/ReadMore/MohsinKhan";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Route path="/SeemaAbidi" component={SeemaAbidi} />
          <Route path="/AliAbbas" component={AliAbbas} />
          <Route path="/KazimRaza" component={KazimRaza} />
          <Route path="/HassanAbidi" exact component={HassanAbidi} />
          <Route path="/MohsinKhan" exact component={MohsinKhan} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </Router>
      {/* <SeemaAbidi />
      <AliAbbas />
      <KazimRaza />
      <HassanAbidi />
      <MohsinKhan /> */}
      <Footer />
    </>
  );
}

export default App;
