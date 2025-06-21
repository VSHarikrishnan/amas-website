// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Treks from './pages/Treks/Treks';
import Landing from './pages/LandingPage/Landing';
import UpcomingEvents from './pages/Events/UpcomingEvents';
import Testimonials from './pages/Testimonials/Testimonials';
import Events from './pages/Events/Events';
import WhyUs from './pages/WhyUs/WhyUs';
import ContactUs from './pages/ContactUs/ContactUs';
import FAB from './components/FloatingActionButton/FAB';
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
      <section id="events">
        <Events />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <FAB />
    </div>
  );
};

export default App;
