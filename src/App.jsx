// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollHomePage from './pages/Home/ScrollHomePage';
import TrekDetails from './pages/TrekDetails/TrekDetails';
import ScrollToTop from './Utils/ScrollToTop';
import TrekOverview from './pages/TrekDetails/TrekOverview';
import TrekOverviewNew from './pages/TrekDetailsNew/TrekOverviewNew';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ScrollHomePage />} />
        <Route path="/trek/:id" element={<TrekOverviewNew />} />
        <Route path="/treks" element={<TrekOverviewNew />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
