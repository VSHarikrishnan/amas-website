// src/pages/ScrollHomePage.jsx
import Navbar from '../../components/Navbar/Navbar';
import Home from './Home';
import AboutUs from '../AboutUs/AboutUs';
import Landing from '../LandingPage/Landing';
import Testimonials from '../Testimonials/Testimonials';
import Events from '../Events/Events';
import WhyUs from '../WhyUs/WhyUs';
import ContactUs from '../ContactUs/ContactUs';
import FAB from '../../components/FloatingActionButton/FAB';
import TeamLegacy from '../TeamLegacy/TeamLegacy';
import OfferedActivities from '../OfferedActivities/OfferedActivities';

const ScrollHomePage = () => {
    return (
        <div>
            <Navbar />
            <section id="landing">
                <Landing />
            </section>
            <section id="home">
                <Home />
            </section>
            <section id="offered-activities">
                <OfferedActivities />
            </section>
            <section id="team-legacy">
                <TeamLegacy />
            </section>
            {/* <section id="events">
                <Events />
            </section> */}
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

export default ScrollHomePage;
