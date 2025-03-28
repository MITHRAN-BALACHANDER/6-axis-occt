import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar/navbar";
import Home from "./home/Home";
import Graph from "./Graph/Graph";
import Settings from "./Setting/settings";
import About from "./about/About";
import Exit from "./exit/exit";
import Login from "./login/login";
function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login/>} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logout" element={<Login />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
