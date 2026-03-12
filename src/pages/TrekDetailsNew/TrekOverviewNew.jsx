import React, { useState } from "react";
import "./TrekOverviewNew.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../../components/Navbar/Navbar";
import FAB from "../../components/FloatingActionButton/FAB";

// 🔹 Trek JSON data (will later come from API)
const trekData = {
    name: "Kedarkantha Trek",
    images: [
        "https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    basicDetailsTab: [
        {
            icon: "/assets/region.png",
            title: "Region",
            value: "Uttarakhand | India",
        },
        {
            icon: "/assets/duration.png",
            title: "Duration",
            value: "6 Days",
        },
        {
            icon: "/assets/altitude.png",
            title: "Max Altitude",
            value: "12,500 ft",
        },
        {
            icon: "/assets/distance.png",
            title: "Trekking Km",
            value: "20 Km",
        },
        {
            icon: "/assets/grade.png",
            title: "Grade",
            value: "Easy to Moderate",
        },
    ],
    overview: {
        overviewBasic: {
            "Trek Name": "Hampta Pass Trek",
            "Days": "5",
            "Adventure Type": "Trekking",
            "Base Camp": "Manali",
            "Season": "Monsoon",
            "Month": "June | July | August | September",
            "Country": "India",
            "Altitude": "14,100 Ft.",
            "Grade": "Moderate",
            "Rail Head": "Chandigarh is the nearest rail head to the base camp",
            "Stay": "Camping (Twin sharing)",
            "Food": "Meals while on trek (Veg + Egg)",
            "Location": "Himachal Pradesh",
            "Distance": "24 Km.",
            "Trail Type":
                "Cross over trail | Start in one valley, traverse the pass, and ends in another valley.",
            "AirPort": "Bhuntar, which is 52 km away from Manali",
        },

        highlights: [
            "5% GST will be applicable on Trek Cost and Add-ons",
            "Services Manali to Manali | Included Transport",
            "Reporting Point: Woodbine Hotel, Manali",
            "Drop Point: Manali Bus Station",
            "Reporting Time: 12:00 PM",
            "Drop Time: 6:30 PM – 7:30 PM (weather dependent)",
            "Please reach Manali a day before to avoid delays",
        ],

        overviewDetails: [
            {
                title: "Why is Hampta Pass a Must-Do Trek?",
                value: [
                    "Hampta Pass is a crossover trek connecting Kullu Valley to Lahaul.",
                    "Every day brings a dramatic change in landscapes.",
                    "Stream crossings add thrill using rope support.",
                    "Summit views at 14,000+ ft are breathtaking.",
                ],
            }, {
                title: "Best Time for the Hampta Pass trek",
                value: [
                    "The best time for the Hampta Pass trek is during the monsoon months, from June to September, when the weather is pleasant and the landscapes are at their most vibrant. This period offers the ideal setting for Hampta Pass trekking, with clear skies, blooming meadows, flowing rivers, and just the right amount of snow in higher regions. If you're aiming to experience snow, book your Hampta Pass trek in June, early in the month, you’ll find snow at higher altitudes, while the valleys begin to turn green as the month goes on. Hampta Pass in July and August offers the best trekking experience, with the best accessible trail and nature at its finest. September is also a wonderful time to trek, offering crisp, clear skies and stunning autumn hues, although temperatures at night can fall below zero. Overall, late June to early September is considered the best time for the Hampta Pass trek, offering a perfect mix of adventure and natural beauty."]
            }, {
                title: "Hampta Pass Trek- A Scenic Crossover Path",
                value: [
                    "Himachal Pradesh offers many trekking options, each with its own unique charm. Among them, the Hampta Pass Trek stands out as a perfect mix of natural beauty and light adventure. It’s ideal even for beginners, with a beautiful compilation of the right amount of challenge to keep things exciting. The Hampta Pass trekking covers everything that makes a trek a fulfilling experience including glaciers, flowing streams, changing landscapes, and stunning views."]
            }
        ],


    }, participantCriteria: {
        title: "Who Can Participate",
        value: [
            {
                subtitle: "Age Requirement",
                value: [
                    "Minimum age: 12 years",
                    "First-timers are welcome, though prior trekking experience is preferred. Good fitness is a must."
                ]
            },
            {
                subtitle: "Fitness Criteria",
                value: [
                    "The trekker should be able to jog 5 km in 33 minutes or walk 10 km in 75 minutes without stress.",
                    "If cycling, the trekker should be able to cycle 15 km in 45 minutes.",
                    "If carrying a backpack, the trekker should manage 10–12 kg. With offload option, 3–5 kg.",
                    "If BMI is outside the normal range (18–28), consult the Trek Coordinator before booking."
                ]
            }
        ]
    },
    itinerary: {
        title: "Hampta Pass Trek Itinerary",
        value: [
            {
                subtitle: "Day 1: Manali to Chhika via Jobra | Walk Through Forest Cover",
                value: [
                    "Altitude: Manali – 2,100 m / 6,400 ft",
                    "Jobra – 2,800 m / 9,100 ft",
                    "Chhika – 3,100 m / 10,100 ft",
                    "Drive Distance (Manali to Jobra): 16 km | 1 hr",
                    "Trek Distance (Jobra to Chhika): 3 km | 2 hrs",
                    "Reporting Time: 12:00 PM | Drop Time: 6:30 PM – 7:30 PM (subject to weather and road conditions)"
                ]
            },
            {
                subtitle: "Day 2: Chhika to Balu Ka Ghera | Stay at a Beautiful Campsite",
                value: [
                    "Altitude: 3,600 m / 11,800 ft",
                    "Trek Distance: 6–7 km | 5–6 hrs"
                ]
            },
            {
                subtitle: "Day 3: Balu Ka Ghera to Shea Goru | Panoramic Mountain Views",
                value: [
                    "Altitude: Hampta Pass – 4,300 m / 14,100 ft",
                    "Shea Goru – 3,900 m / 12,900 ft",
                    "Trek Distance: 7 km | Duration: 10 hrs",
                    "Altitude Gain: 520 m / 1,700 ft"
                ]
            },
            {
                subtitle:
                    "Day 4: Shea Goru to Chatru & Drive to Chandratal | Bask in the Serenity of the Lake",
                value: [
                    "Altitude: Chatru – 3,350 m / 11,000 ft",
                    "Trek Distance: 7 km | Duration: 5 hrs",
                    "Drive Distance: 50 km | 3–4 hrs (Chandratal visit depends on road & weather)"
                ]
            },
            {
                subtitle: "Day 5: Chatru to Manali | Bid Adieu to the Mountains",
                value: [
                    "Drive Distance: 65 km",
                    "Drive Duration: 5–6 hrs"
                ]
            },
            {
                subtitle: "Note",
                value: [
                    "Chandratal visit depends on road and weather conditions.",
                    "Keep a buffer day in your travel plan.",
                    "Unused buffer day can be used to explore Manali.",
                    "Distance, altitude and trekking hours are approximate.",
                    "Carry original and copy of valid ID proof.",
                    "Arrive a day early if traveling by flight."
                ]
            }
        ]
    },
    termsConditions: {
        title: "Cost Terms",
        tabs: [
            {
                tab: "Inclusions & Exclusions",
                sections: [
                    {
                        subtitle: "Inclusions",
                        value: [
                            "Accommodation (as per the itinerary): Camping on Day 1 to Day 4.",
                            "Meals (Veg + Egg): From Day 1 Lunch to Day 5 Breakfast.",
                            "Support: Base camp manager, Trek Leader, High-altitude chef, Local guides, Support staff.",
                            "Trek equipment: Sleeping bag, tents, utensils, safety gear, walkie-talkie, etc.",
                            "First aid: Medical kit, oxygen cylinder, stretcher, monitoring equipment.",
                            "Transportation: Manali–Jobra, Chatru–Manali via Chandratal.",
                            "Mules/porters for central luggage.",
                            "Cloakroom facility at base camp.",
                            "Permits & entry fees (Indian nationals).",
                            "Services from Manali to Manali.",
                            "Trek completion certificate."
                        ]
                    },
                    {
                        subtitle: "Exclusions",
                        value: [
                            "Insurance (Non-Indian / NRI / OCI).",
                            "Food during transit.",
                            "Personal expenses.",
                            "Personal mule/porter.",
                            "Emergency evacuation & hospitalization.",
                            "Costs due to itinerary changes (weather, roadblocks, breakdowns).",
                            "Anything not mentioned in inclusions.",
                            "On-demand services (extra payment): Satellite phone, Gamow bag, AED."
                        ]
                    }
                ]
            },
            {
                tab: "Cancellation Policy",
                sections: [
                    {
                        subtitle: "Cancellation Terms",
                        value: [
                            "To request a cancellation, please email us at info@trekthehimalayas.com using your registered email ID."
                        ],
                    },
                    {
                        subtitle: "Cancellations prior to 25 days from the start of the Trip",
                        value: [
                            "5% deduction of trek fee",
                            "100% trek fee cash voucher for any trip till one year",
                            "Transfer your trek (any trek, any date) to your friend",
                        ],
                    },
                    {
                        subtitle: "Cancellation between 24 days and 15 days to the start of the Trip",
                        value: [
                            "30% deduction of trek fee",
                            "100% trek fee cash voucher for same trip till one year",
                            "85% trek fee cash voucher for any trip till one year",
                            "Transfer your trek (same trek, any date) to your friend",
                        ],
                    },
                    {
                        subtitle: "Cancellation between 14 days and 10 days to the start of the Trip",
                        value: [
                            "50% deduction of trek fee",
                            "80% trek fee cash voucher for same trip till one year",
                            "70% trek fee cash voucher for any trip till one year",
                            "Book the same trek, in the same season, with any other batch",
                            "Transfer your trek (same trek, any date) to your friend",
                        ],
                    },
                    {
                        subtitle: "Cancellation less than 9 days to the start of the trek",
                        value: [
                            "No cash refund",
                            "20% trek fee cash voucher for the same trip till one year",
                            "10% trek fee cash voucher for any trip till one year",
                            "Transfer your trek (same trek, same date) to your friend",
                        ],
                    },
                    {
                        subtitle: "Rescheduling Policy",
                        value: [
                            "To reschedule a trek (same trek only), a 30% rescheduling fee of the trek cost will apply.",
                        ],
                    },
                ],
            },
        ]
    },
    thingsToCarry: {
        title: "Trek Essentials",
        tabs: [
            {
                tab: "Things To Carry",
                sections: [
                    {
                        subtitle: "What you should bring ?",
                        value: [
                            "Backpack with rain cover(20 - 30 ltr) with comfortable shoulder straps",
                            "Day pack with rain cover    20 - 30 ltr(If off- load opted)",
                            "Walking stick   Advisable(At least one)",
                            "Water Bottle / Hydration pack   2 bottles of one liter each",
                            "Snacks  Energy bars, dry fruits, electral / ors",
                            "Personal Medical Kit",
                            "T - Shirt(Synthetic quick dry) Full sleeves",
                            "Trek Pant(Synthetic quick dry)",
                            "Sunglasses  UV protection",
                            "Sun Cap",
                            "Trekking shoes(high ankle, good grip)",
                            "Floaters / flip - flops",
                            "Cotton socks"
                        ]
                    },
                ]
            },
            {
                tab: "Provided Utils",
                sections: [

                    {
                        subtitle: "What will be provided",
                        value: [
                            "First Aid Kit",
                            "Breakfast, Lunch, Sancks",
                            "Climbing / Trekking Equipment",
                            "Changing Tents",
                            "Expert Trekking Guide",
                        ],
                    },
                ],
            },
            {
                tab: "Personal Utilites",
                sections: [

                    {
                        subtitle: "Personal Care",
                        value: [
                            "Sunscreen",
                            "Moisturiser",
                            "Chap - stick / Lip balm",
                            "Toothbrush and toothpaste",
                            "Toilet paper & Wipes",
                            "Soap / hand sanitizers",
                            "Antibacterial powder",
                            "Quick dry towel"
                        ],
                    },
                ],
            },

        ]
    },


};
const { overviewBasic, highlights, overviewDetails } = trekData.overview;

const basicEntries = Object.entries(overviewBasic);

export default function TrekOverviewNew() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeCarryTab, setActiveCarryTab] = useState(0);
    return (
        <div><Navbar />
            <div className="trek-overview-page">

                {/* ================= HERO SECTION ================= */}
                <div className="hero-section">
                    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                        {trekData.images.map((img, i) => (
                            <div key={i} className="custom-carousel-slide">
                                <img src={img} alt="trek" className="custom-carousel-image" />
                            </div>
                        ))}
                    </Carousel>
                    <div className="hero-banner">
                        <h1>{trekData.name}</h1>
                    </div>
                </div>

                {/* ================= ICON DETAILS ================= */}
                <div className="basic-details-section">
                    <div className="basic-details-container">
                        {trekData.basicDetailsTab.map((item, index) => (
                            <div className="basic-detail-card" key={index}>
                                <div className="basic-detail-icon">
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <p className="basic-detail-title">{item.title}</p>
                                <p className="basic-detail-value">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= OVERVIEW ================= */}
                <div className="overview-section">
                    <div className="overview-card">
                        <h2 className="overview-title">Overview</h2>

                        {/* Basic Details */}
                        <div className="overview-basic-grid">
                            {[0, 1, 2].map((col) => (
                                <div className="overview-column" key={col}>
                                    {basicEntries
                                        .slice(col * 5, col * 5 + 5)
                                        .map(([key, value]) => (
                                            <p key={key}>
                                                <b>{key}:</b> {value}
                                            </p>
                                        ))}
                                </div>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="overview-subsection">
                            <h3>Highlights</h3>
                            <ul>
                                {highlights.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Overview Details */}
                        {overviewDetails.map((section, index) => (
                            <div className="overview-subsection" key={index}>
                                <h3>{section.title}</h3>
                                <ul>
                                    {section.value.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= PARTICIPANT CRITERIA ================= */}
                <div className="participant-section">
                    <div className="participant-card">
                        <h2 className="participant-title">{trekData.participantCriteria.title}</h2>
                        {trekData.participantCriteria.value.map((item, index) => (
                            <div className="participant-block" key={index}>
                                <h3 className="participant-subtitle">{item.subtitle}</h3>
                                <ul>
                                    {item.value.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= ITINERARY ================= */}
                <div className="itinerary-section">
                    <div className="itinerary-card">
                        <h2 className="itinerary-title">{trekData.itinerary.title}</h2>
                        {trekData.itinerary.value.map((day, index) => (
                            <div className="itinerary-day" key={index}>
                                <h3 className="itinerary-subtitle">{day.subtitle}</h3>
                                <ul>
                                    {day.value.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= TERMS & CONDITIONS ================= */}
                <div className="terms-section">
                    <div className="terms-card">
                        {/* Title */}
                        <h2 className="terms-title">{trekData.termsConditions.title}</h2>

                        {/* Tabs */}
                        <div className="terms-tabs">
                            {trekData.termsConditions.tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`terms-tab-btn ${activeTab === index ? "active" : ""}`}
                                    onClick={() => setActiveTab(index)} // toggle active tab
                                >
                                    {tab.tab}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="terms-content">
                            {trekData.termsConditions.tabs[activeTab].sections.map(
                                (section, idx) => (
                                    <div key={idx} className="terms-block">
                                        <h3 className="terms-subtitle">{section.subtitle}</h3>
                                        <ul className="terms-list">
                                            {section.value.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* ================= Things To Carry ================= */}
                <div className="terms-section">
                    <div className="terms-card">
                        {/* Title */}
                        <h2 className="terms-title">{trekData.thingsToCarry.title}</h2>

                        {/* Tabs */}
                        <div className="terms-tabs">
                            {trekData.thingsToCarry.tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`terms-tab-btn ${activeCarryTab === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveCarryTab(index)}
                                >
                                    {tab.tab}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="terms-content">
                            {trekData.thingsToCarry.tabs[activeCarryTab].sections.map(
                                (section, idx) => (
                                    <div key={idx} className="terms-block">
                                        <h3 className="terms-subtitle">{section.subtitle}</h3>
                                        <ul className="terms-list">
                                            {section.value.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <FAB />
        </div>
    );
}
