import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Portfolio from "./components/About/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
      </div>
    </>
  );
}

export default App;
