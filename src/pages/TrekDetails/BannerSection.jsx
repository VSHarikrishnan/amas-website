import React from 'react';
import { Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import { getIcon, getIconClass } from '../../Utils/Icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BannerSection.css';
const TrekBannerSection = ({ images, title, duration, location }) => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={5000}
                showStatus={false}
                showIndicators={false}
            >
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img src={img} alt={`Slide ${idx}`} className="banner-image" />
                    </div>
                ))}
            </Carousel>
            <div className="banner-content-box">
                <div className="trek-info">  <h1 className="trek-title">{title}</h1>
                    <div className="trek-info-row">
                        <span>{getIcon("clock")} {duration}</span>
                        <span>{getIcon("mapLocation")} {location}</span>
                    </div> </div>

                <div className="banner-nav-bar">
                    {['OVERVIEW', 'ITINERY', 'INCLUSIONS', 'PICKUP'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}  // Must match the section id
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="banner-nav-link"
                            activeClass="active"
                            spy={true}
                        >
                            {item}
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrekBannerSection;
