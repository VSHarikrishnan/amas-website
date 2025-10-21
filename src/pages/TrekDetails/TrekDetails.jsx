import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TrekDetails.css';
import BannerSection from './BannerSection';
import FAB from '../../components/FloatingActionButton/FAB';
import TrekOverview from './TrekOverview';
import ItinerarySection from './TrekDetailComponents/ItinerarySection';
import InclusionsSection from './TrekDetailComponents/InclusionsSection';

// Sample trek detail object (extendable)
const trekDetail = {
    id: 1,
    name: 'Meesapulimala Trek',
    type: 'Weekend Trek',
    images: ['https://vl-prod-static.b-cdn.net/system/images/000/323/797/c02606ebef912bbeeebed9c90b8e4159/2340gt/Kurinjla.png?1750078062',
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?w=600&auto=format&fit=crop&q=60',
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?w=600&auto=format&fit=crop&q=60',
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?w=600&auto=format&fit=crop&q=60',
    ],
    location: 'Idukki, Kerala',
    duration: 2,
    distance: 15,
    gradient:"Moderate",
    difficulty: 'Easy',
    altitude: '2640 m',
    season: 'Oct – Feb',
    popularity: 'High',
    description: 'Experience cloud‑kissing grasslands and Shola forests.',
    badge: 'Beginner Friendly',
    badgeColor: '#00796b',
    likes: 106,
    comments: 66,
    rating: 4.6,
    price: 3800,
    date:'02-06-2025',
    transportation: { available: true, mode: 'Tempo Traveller', pickupPoints: ['Ernakulam', 'Kottayam', 'Munnar'] },
    inclusions: ['Guide', 'Meals', 'Camping', 'Permits'],
    exclusions: ['Travel Insurance', 'Personal Expenses'],
    terms: '50% advance required. Cancellation charges apply.',
    videos: [
        { label: 'YouTube Video', url: 'https://www.youtube.com/watch?v=abc123' }
    ],
};

// itineraryData.js
export const itineraryData = {
    days: [
        {
            title: 'Day 0',
            activities: [
                'Start journey from Bengaluru to Chikkamangaluru in an AC TT/Mini Bus.',
            ],
        },
        {
            title: 'Day 1',
            activities: [
                'Reach Balegal, freshen up, have breakfast, get ready to start the trek.',
                'Leave all your luggage at Balegal. Carry only water bottle, packed lunch and snacks-if required.',
                'Trek to the peak of Kurinjal through beautiful Western Ghats.',
                'Have packed lunch enjoying the view from the peak.',
                'Descend and reach Balegal by early evening.',
                'Hire a jeep to reach base camp at Mullodi.',
                'Enjoy an adventurous jeep drive through forest trails and streams.',
                'Freshen up, enjoy a hot cup of tea and views of surrounding peaks.',
                'Dinner and overnight stay at the base camp.',
            ],
        },
        {
            title: 'Day 2',
            activities: [
                'Wake up early to the sounds of nature.',
                'Tea, breakfast, and jeep ride to Bavikonda peak (if permitted).',
                'Have packed lunch or return to Balegal.',
                'Start journey back to Bengaluru.',
            ],
        },
    ],

    thingsToCarry: [
        'A backpack of 30L and small day bag of 10L',
        'Good hiking shoes/sandals with grip + socks',
        'Toiletries, towels, spare clothes',
        'Water bottles - 2 litres (compulsory)',
        'Cap/hat/sunglasses',
        'Snacks, energy bars, fruits',
        'ID Proof',
    ],

    pickupPoints: [
        'Marathahalli Kalamandir',
        'HSR BDA Complex',
        'Silk Board',
        'BTM Signal',
        'Jayadeva Hospital',
        'Banashankari Bus Stand',
        'DG Petrol Bunk',
        'PESIT College',
    ],

    insurance: {
        description:
            'Trekking involves risk. Insurance is included in your package to protect you.',
        linkText: 'Click here to know more.',
        linkUrl: 'https://www.treknomads.com/trek-insurance-2-day-treks',
    },

    dosAndDonts: [
        'Bring back all waste. No littering policy.',
        'Wear comfortable trekking clothes (avoid jeans and bright colors).',
        'Keep your backpack light.',
        'Inform trek lead if stopping or feeling unwell.',
        'Do not disturb wildlife. Stay calm and quiet.',
        'Avoid wandering into forests or waterfalls alone.',
        'Be kind and supportive to fellow trekkers.',
        'No smoking, alcohol or intoxicants during trek.',
        'No loud music or speakers on the trail.',
        'Trek lead’s decision is final and binding.',
    ],
};
  
export const inclusionExclusionData = {
    inclusions: [
        'Travel: To and fro travel from Bengaluru to Kudremukha in an AC TT/Mini Bus',
        'Stay: Accommodation for a night at base camp with basic amenities',
        'Food: 2 Breakfasts, 1 Packed Lunch, 1 Dinner',
        'Jeep Ride: To and fro - Balegal to Mullodi',
        'Forest Entry Tickets',
        'Guide Fees and Driver Bata',
    ],
    exclusions: [
        'Any other expenses incurred apart from inclusions.',
        'Personal expenses.',
        'Any additional expenses due to emergencies',
    ],
};
  
const TrekDetailsPage = () => (
    <div className="trek-detail-block">
        <BannerSection
            images={trekDetail.images}
            title="Trek to Kurinjal Betta"
            duration="2 Nights 2 Days"
            location="Chikmagalur"
            price="4249"
        />
        <section id="overview"><div className='overview'><TrekOverview trek={trekDetail}></TrekOverview></div></section>
        <section id="itinery"><div className='itinery'><ItinerarySection></ItinerarySection></div></section>
        <section id="inclusions"><div className='inclusions'><InclusionsSection></InclusionsSection></div></section>
        <section id="pickup"><div className='pickup'>pickup</div></section>
        <FAB />
        {/* Image Carousel
        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
            {trekDetail.images.map((img, i) => (
                <div key={i}>
                    <img src={img} alt={`${trekDetail.name} ${i + 1}`} />
                </div>
            ))}
        </Carousel>

        {/* Header Info
        <div className="trek-header-info">
            <div className="title-row">
                <h1>{trekDetail.name}</h1>
                <span className="badge" style={{ backgroundColor: trekDetail.badgeColor }}>
                    {trekDetail.type}
                </span>
            </div>
            <div className="engagement-row">
                ⭐ {trekDetail.rating} · 👍 {trekDetail.likes} Likes · 💬 {trekDetail.comments} Comments
            </div>
            <section className="trek-section">
                <h3>Event preview videos</h3>
            </section>
            <div className="video-links">
                {trekDetail.videos.map((v, i) => (
                    <span>{v.label} : <a href={v.url} key={i} target="_blank" rel="noopener noreferrer">Click to view</a></span>
                ))}
            </div>
        </div>

        <p className="trek-description">{trekDetail.description}</p>

     
        <table className="trek-details-table">
            <tbody>
                {[
                    ['Location', trekDetail.location],
                    ['Duration', `${trekDetail.duration} days`],
                    ['Distance', `${trekDetail.distance} km`],
                    ['Altitude', trekDetail.altitude],
                    ['Difficulty', trekDetail.difficulty],
                    ['Season', trekDetail.season],
                    ['Group Size', trekDetail.groupSize],
                    ['Price', `₹${trekDetail.price}`],
                ].map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>

     
        <section className="trek-section">
            <h3>Transportation</h3>
            {trekDetail.transportation.available ? (
                <p>{trekDetail.transportation.mode} — Pickup from {trekDetail.transportation.pickupPoints.join(', ')}</p>
            ) : <p>Not available</p>}
        </section>


        <section className="trek-section half-width">
            <h3>Inclusions</h3>
            <ul>{trekDetail.inclusions.map(i => <li key={i}>{i}</li>)}</ul>
        </section>
        <section className="trek-section half-width">
            <h3>Exclusions</h3>
            <ul>{trekDetail.exclusions.map(i => <li key={i}>{i}</li>)}</ul>
        </section>

        <section className="trek-section">
            <h3>Terms & Conditions</h3>
            <p>{trekDetail.terms}</p>
        </section>

        <button className="book-now">Book Now</button> */}
    </div>
);

export default TrekDetailsPage;
