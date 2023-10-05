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

// import "./App.css";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import Dashboard from "./components/Dashboard";
// import About from "./components/About";
// import Preloader from "./components/Pre";
// import React, { useState, useEffect } from "react";
// import ScrollToTop from "./components/ScrollToTop";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";

// function App() {
//   const [load, upadateLoad] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);
//   return (

//      <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//       <NavBar />
//       <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="*" element={<Navigate to="/"/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// // {/* <Router>
// //       <Preloader load={load} />
// //       <div className="App" id={load ? "no-scroll" : "scroll"}>
// //         <NavBar />
// //         <ScrollToTop />
// //         <Switch>
// //           <Route component={Home} path="/home" exact />
// //           <Route component={Dashboard} path="/dashboard" />
// //           <Route component={About} path="/about" />
// //         </Switch>
// //         <Footer />
// //       </div>
// //     </Router> */}
