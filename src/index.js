import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import "./App.scss";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
