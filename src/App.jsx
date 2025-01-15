import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Admission from "./Components/Admission";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DepartmentsPage from "./Components/DepartmentsPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PlacementPage from "./Components/PlacementPage";
import Aurora from "./Components/AllEvents/Aurora";
import Hackathon from "./Components/AllEvents/Hackathon"
import TechTalk from "./Components/AllEvents/TechTalk"
import Spoorthi from "./Components/AllEvents/Spoorthi"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/placements" element={<PlacementPage />} />
        <Route path="/aurora" element={<Aurora/>} />
        <Route path="/hackathons" element={<Hackathon/>} />
        <Route path="/tech-talks" element={<TechTalk/>} />
        <Route path="/sports-fest" element={<Spoorthi/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
