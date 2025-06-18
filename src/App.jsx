// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Treks from './pages/Treks/Treks';
import Landing from './pages/LandingPage/Landing';
import UpcomingEvents from './pages/Events/UpcomingEvents';
import Testimonials from './pages/Testimonials/Testimonials';
const App = () => {
  return (
    <div>
      <Navbar />
      <section id="landing">
        <Landing />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="treks">
        <Treks />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="events">
        <UpcomingEvents />
      </section>
      {/* <section id="testimonials"> */}
      <Testimonials />
      {/* </section> */}
      {/* Add other sections similarly */}
    </div>
  );
};

export default App;
