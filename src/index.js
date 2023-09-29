import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Letting from "./pages/letting";
import "./App.scss";

// Mise en place des routes pour le router : Home (page d'accueil), Letting (locations immobilières), etc.
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* indique au Router le chemin */}
        <Route path="/Kasa/" element={<Home />} />
        {/* élément que le Router doit renvoyer */}
        <Route path="/letting/:id" element={<Letting />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
