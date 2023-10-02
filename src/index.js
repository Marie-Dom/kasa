import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Letting from "./pages/letting";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import "./App.scss";

// Mise en place des routes pour le router
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kasa/" element={<Home />} />
        <Route path="/letting/:id" element={<Letting />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
