// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Treks from './pages/Treks/Treks';
import Landing from './pages/LandingPage/Landing';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '0px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/treks" element={<Treks />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
