import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Letting from "./pages/letting";
import "./App.scss";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letting/:id" element={<Letting />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
