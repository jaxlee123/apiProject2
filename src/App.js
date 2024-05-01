// import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route,} 
  from "react-router-dom";
import LoginScreen from "./loginScreen";
import InfoScreen from "./infoScreen";
import Navbar from "./Navbar"; 
// import NavBarElelments from "./NavBarElelments"



function App() {
  return (
    <>
        <Router>
      <Navbar />
            <Routes>
                <Route  path="/" element={< LoginScreen />} />
                <Route path="/infoScreen" element={< InfoScreen />} />
            </Routes>
        </Router>
        {/* <h1>hiiii</h1> */}
        </>
  );
}

export default App;