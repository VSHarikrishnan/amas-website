// src/api/mockData.js
// ============================================================
// MOCK DATA — Adventure NGO
// ------------------------------------------------------------
// Single source of all hardcoded test data.
// Every object shape exactly mirrors the Spring backend response.
// Import these in api.js to use as fallback during development.
// ============================================================

// ============================================================
// NAVIGATION
// ============================================================
export const MOCK_NAV_DATA = {
    logo: {
        src: "https://amaskerala.org/assets/images/logo/amas-logo-text.png",
        alt: "AMAS Kerala",
        fallbackText: "AMAS",
        fallbackAccent: "Kerala",
        href: "/",
    },
    items: [
        { key: "home", label: "Home", type: "scroll", target: "home" },
        { key: "treks", label: "Treks", type: "route", target: "/treks" },
        {
            key: "gallery", label: "Gallery", type: "dropdown",
            children: [
                { key: "trekking", label: "Trekking", type: "scroll", target: "trekking" },
                { key: "valley-crossing", label: "Valley Crossing", type: "scroll", target: "valley-crossing" },
                { key: "rock-climbing", label: "Rock Climbing", type: "scroll", target: "rock-climbing" },
                { key: "waterfalls", label: "Waterfalls", type: "scroll", target: "waterfalls" },
            ],
        },
        {
            key: "events", label: "Events", type: "dropdown",
            children: [
                { key: "upcoming", label: "Upcoming Events", type: "scroll", target: "upcoming" },
                { key: "past", label: "Past Events", type: "scroll", target: "past" },
                { key: "adventure", label: "Adventure Activities", type: "scroll", target: "adventure" },
                { key: "nature", label: "Nature Walks", type: "scroll", target: "nature" },
                { key: "camps", label: "Camps", type: "scroll", target: "camps" },
                { key: "workshops", label: "Workshops", type: "scroll", target: "workshops" },
                { key: "competitions", label: "Competitions", type: "scroll", target: "competitions" },
                { key: "community", label: "Community Events", type: "scroll", target: "community" },
                { key: "social", label: "Social Services", type: "scroll", target: "social" },
            ],
        },
        { key: "about-us", label: "About Us", type: "scroll", target: "about-us" },
        { key: "contact-us", label: "Contact", type: "scroll", target: "contact-us" },
    ],
    cta: { label: "Login", href: "/login" },
};

// ============================================================
// TREKS
// ============================================================
export const MOCK_TREKS = [
    {
        id: "valley-of-flowers",
        title: "Valley of Flowers",
        subtitle: "Uttarakhand, India",
        category: "Trekking",
        difficulty: "Easy–Medium",      // "Easy" | "Easy–Medium" | "Medium" | "Hard"
        duration: "7 Days",
        groupSize: "10–20",
        altitude: "3,658 m",
        price: 8500,
        currency: "INR",
        coverImage: "/assets/images/treks/valley-of-flowers.jpg",
        gallery: [],
        description:
            "A UNESCO World Heritage Site trek through one of the most spectacular high-altitude Himalayan valleys, bursting with rare alpine flora.",
        highlights: ["Alpine meadows", "Rare Himalayan flora", "Hemkund Sahib"],
        included: ["Guide", "Accommodation", "Meals"],
        upcoming: true,
        featured: true,
        nextDate: "2025-07-15",
    },
    {
        id: "coastal-camping",
        title: "Coastal Camping",
        subtitle: "Kerala Coast",
        category: "Camping",
        difficulty: "Easy",
        duration: "3 Days",
        groupSize: "5–15",
        altitude: null,
        price: 3200,
        currency: "INR",
        coverImage: "/assets/images/treks/coastal-camping.jpg",
        gallery: [],
        description:
            "Camp along the pristine Kerala coastline and experience breathtaking sunrises over the Arabian Sea.",
        highlights: ["Beach camping", "Bonfire nights", "Sunrise yoga"],
        included: ["Tent", "Meals", "Activities"],
        upcoming: true,
        featured: false,
        nextDate: "2025-06-20",
    },
    {
        id: "rock-face-challenge",
        title: "Rock Face Challenge",
        subtitle: "Western Ghats",
        category: "Rock Climbing",
        difficulty: "Hard",
        duration: "2 Days",
        groupSize: "6–12",
        altitude: "900 m",
        price: 4500,
        currency: "INR",
        coverImage: "/assets/images/treks/rock-climbing.jpg",
        gallery: [],
        description:
            "An exhilarating two-day rock climbing expedition on the rugged natural rock faces of the Western Ghats.",
        highlights: ["Technical climbing", "Rappelling", "Summit views"],
        included: ["Equipment", "Guide", "Safety gear"],
        upcoming: false,
        featured: true,
        nextDate: null,
    },
];

// ============================================================
// TEAM
// ============================================================
export const MOCK_TEAM = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Founder & Chief Trek Leader",
        bio: "Over 15 years leading Himalayan expeditions. Certified mountaineer and wilderness first responder.",
        avatar: "/assets/images/team/rajesh.jpg",
        expeditions: 120,
        yearsActive: 15,
        social: { instagram: "#", facebook: "#" },
    },
    {
        id: 2,
        name: "Meera Pillai",
        role: "Head of Training & Safety",
        bio: "Rock climbing instructor and former national-level athlete. Passionate about making adventure accessible to all.",
        avatar: "/assets/images/team/meera.jpg",
        expeditions: 85,
        yearsActive: 10,
        social: { instagram: "#", facebook: "#" },
    },
    {
        id: 3,
        name: "Anil Das",
        role: "Ecology & Nature Guide",
        bio: "Botanist and wildlife enthusiast with deep knowledge of the Western Ghats ecosystem.",
        avatar: "/assets/images/team/anil.jpg",
        expeditions: 60,
        yearsActive: 8,
        social: { instagram: "#", facebook: "#" },
    },
];



// ============================================================
// EVENTS
// ============================================================
export const MOCK_EVENTS = [
    {
        id: "summer-trek-2025",
        title: "Summer Trek 2025",
        category: "Trekking",
        date: "2025-07-15",
        endDate: "2025-07-21",
        location: "Uttarakhand",
        coverImage: "/assets/images/events/summer-trek.jpg",
        description: "Our flagship annual summer trek through the Himalayas.",
        registrationOpen: true,
        maxParticipants: 20,
        registeredCount: 12,
        price: 8500,
        currency: "INR",
    },
    {
        id: "monsoon-valley-crossing",
        title: "Monsoon Valley Crossing",
        category: "Valley Crossing",
        date: "2025-08-10",
        endDate: "2025-08-12",
        location: "Munnar, Kerala",
        coverImage: "/assets/images/events/valley-crossing.jpg",
        description: "Experience thrilling valley crossing during the lush monsoon season.",
        registrationOpen: true,
        maxParticipants: 15,
        registeredCount: 7,
        price: 2800,
        currency: "INR",
    },
];

// ============================================================
// ACTIVITIES
// ============================================================
export const MOCK_ACTIVITIES = [
    {
        id: "trekking",
        title: "Trekking",
        icon: "🥾",
        description:
            "Multi-day Himalayan and Western Ghats treks for all skill levels, guided by certified leaders.",
        difficulty: ["Easy", "Medium", "Hard"],
        coverImage: "/assets/images/activities/trekking.jpg",
    },
    {
        id: "rock-climbing",
        title: "Rock Climbing",
        icon: "🧗",
        description:
            "Technical and recreational rock climbing on natural rock faces in the Western Ghats.",
        difficulty: ["Medium", "Hard"],
        coverImage: "/assets/images/activities/rock-climbing.jpg",
    },
    {
        id: "valley-crossing",
        title: "Valley Crossing",
        icon: "🪢",
        description: "Thrilling rope-based valley crossing over scenic gorges and rivers.",
        difficulty: ["Medium"],
        coverImage: "/assets/images/activities/valley-crossing.jpg",
    },
    {
        id: "camping",
        title: "Camping",
        icon: "⛺",
        description: "Overnight camping trips in forests, beaches, and mountain meadows.",
        difficulty: ["Easy"],
        coverImage: "/assets/images/activities/camping.jpg",
    },
    {
        id: "rappelling",
        title: "Rappelling",
        icon: "🧲",
        description:
            "Controlled descents down rock faces — perfect introduction to vertical adventure.",
        difficulty: ["Easy", "Medium"],
        coverImage: "/assets/images/activities/rappelling.jpg",
    },
    {
        id: "nature-walks",
        title: "Nature Walks",
        icon: "🌿",
        description:
            "Guided ecology walks through forests and wildlife corridors led by naturalists.",
        difficulty: ["Easy"],
        coverImage: "/assets/images/activities/nature-walks.jpg",
    },
];

// ============================================================
// ORG STATS
// ============================================================
export const MOCK_STATS = {
    trekkers: 5000,
    expeditions: 320,
    yearsActive: 12,
    districts: 14,
};



// ============================================================
// LANDING / HERO
// ============================================================
export const MOCK_LANDING = {
    slides: [
        {
            id: 1,
            image: "https://amaskerala.org/assets/images/home/slides/rock-climbing.jpg",
            alt: "Rock climbing adventure",
        },
        {
            id: 2,
            image: "https://amaskerala.org/assets/images/home/slides/commando-bridge.jpg",
            alt: "Commando bridge crossing",
        },
        {
            id: 3,
            image: "https://amaskerala.org/assets/images/home/slides/camp-fire.jpg",
            alt: "Campfire under the stars",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop",
            alt: "Mountain peak at sunrise",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1600298882525-1ac025c98b68?q=80&w=1170&auto=format&fit=crop",
            alt: "Valley trekking trail",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=688&auto=format&fit=crop",
            alt: "Forest adventure trail",
        },
    ],
    hero: {
        label: "Adventure Awaits",
        titleLine1: "Conquer",
        titleLine2: "The Wild",
        subtitle: "Join us for life-changing treks, climbs, and expeditions across India's most stunning landscapes.",
        primaryCta: { label: "Explore Treks", href: "/treks" },
        secondaryCta: { label: "Our Activities", target: "offered-activities" },
    },
};
// ============================================================
// HOME PAGE
// ============================================================
export const MOCK_HOME = {
    eyebrow: "Est. 2006 · Kerala, India",
    heading: "Academy for Mountaineering<br/>and <span>Adventure Sports</span>",
    foundedYear: 2006,
    paragraphs: [
        "Since 2006, AMAS Kerala has been providing unparalleled programs and training in adventure sports.",
        "We guarantee extremely safe, adventure-filled, memorable days with your friends or like-spirited adventurers!",
    ],
    cta: { label: "Explore Activities", href: "/treks" },
    slides: [
        {
            id: 1,
            leftImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/rock-climbing.jpg",
            leftAlt: "Rock climbing",
            rightImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/rappeling.jpg",
            rightAlt: "Rappelling",
            icon: "fas fa-campground",
        },
        {
            id: 2,
            leftImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/river-crossing.jpg",
            leftAlt: "River crossing",
            rightImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/water-ball.jpg",
            rightAlt: "Water ball",
            icon: "fa-solid fa-mountain-sun",
        },
        {
            id: 3,
            leftImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/sailing.jpg",
            leftAlt: "Sailing",
            rightImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/kayaking.jpg",
            rightAlt: "Kayaking",
            icon: "fa-solid fa-route",
        },
        {
            id: 4,
            leftImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/camping.jpg",
            leftAlt: "Camping",
            rightImage: "https://amaskerala.org/assets/images/home/40-adventures/resized/parasailing.jpg",
            rightAlt: "Parasailing",
            icon: "fa-solid fa-compass",
        },
    ],
};

// ============================================================
// OFFERED ACTIVITIES
// ============================================================
export const MOCK_OFFERED_ACTIVITIES = {
    header: {
        eyebrow: "What We Offer",
        title: "Exciting <span>Adventures</span>",
        subtitle: "We are experts in offering thrilling, safe, and unforgettable adventure experiences for all skill levels.",
    },
    activities: [
        {
            id: 1,
            title: "Mountaineering",
            subtitle: "Everything you need to scale mountains – rock climbing, rappelling and more.",
            icon: "fa-solid fa-mountain",
            tag: "All Levels",
        },
        {
            id: 2,
            title: "Water Sports",
            subtitle: "From banana boats to jet skis – soaked in fun and adventure.",
            icon: "fa-solid fa-sailboat",
            tag: "Beginner Friendly",
        },
        {
            id: 3,
            title: "Land Activities",
            subtitle: "Nature hikes and thrilling rope adventures await in the wild.",
            icon: "fa-solid fa-earth-europe",
            tag: "All Levels",
        },
        {
            id: 4,
            title: "Camping",
            subtitle: "Campfires, stories, and sunrises – soulfully unforgettable nights outdoors.",
            icon: "fas fa-campground",
            tag: "Family Friendly",
        },
        {
            id: 5,
            title: "Private Events",
            subtitle: "Team building to student programs – tailored adventures just for your group.",
            icon: "fa-solid fa-people-roof",
            tag: "Customisable",
        },
        {
            id: 6,
            title: "Training Programs",
            subtitle: "Sharpen your skills with structured training from seasoned experts.",
            icon: "fa-solid fa-compass",
            tag: "Certified",
        },
        {
            id: 7,
            title: "Valley Crossing",
            subtitle: "Thrilling rope-based crossings over scenic gorges and forest valleys.",
            icon: "fa-solid fa-route",
            tag: "Medium",
        },
        {
            id: 8,
            title: "Kayaking",
            subtitle: "Paddle through backwaters and rivers in a peaceful yet exhilarating experience.",
            icon: "fa-solid fa-water",
            tag: "Beginner Friendly",
        },
        {
            id: 9,
            title: "Nature Walks",
            subtitle: "Guided ecology walks through forests and wildlife corridors with expert naturalists.",
            icon: "fa-solid fa-leaf",
            tag: "Easy",
        },
    ],
};
// ============================================================
// TEAM LEGACY
// ============================================================
export const MOCK_TEAM_LEGACY = {
    eyebrow: "Nearly 2 Decades of Excellence",
    heading: `<span class="thin">The most</span>Experienced<span class="thin">team you can get</span>`,
    body: "With nearly 2 decades in adventure sports, rest assured that you are in safe hands. Having conducted hundreds of events across India, we know how to deal with every terrain, and every situation.",
    features: [
        "Certified mountaineers & wilderness first responders",
        "Conducted events across 14 districts of Kerala",
        "Trusted by schools, colleges & corporates since 2006",
    ],
    stats: [
        { id: 1, icon: "fa-solid fa-house-flag", value: 3200, suffix: "+", label: "Adventurers" },
        { id: 2, icon: "fa-solid fa-tents", value: 200, suffix: "+", label: "Nights Camped" },
        { id: 3, icon: "fa-solid fa-map-location", value: 42, suffix: "+", label: "Locations" },
        { id: 4, icon: "fa-solid fa-people-roof", value: 100, suffix: "+", label: "Community Events" },
    ],
};

// ============================================================
// REVIEWS / TESTIMONIALS  (replace existing MOCK_REVIEWS)
// ============================================================
export const MOCK_REVIEWS = [
    {
        id: 1,
        name: "Aakriti Sinha",
        role: "Trekker",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "2024-03-01",
        comment: "It was my first trek and I had a lovely experience. The guides were so helpful and the entire team made our trip wonderful. Overall a great experience with AMAS Kerala!",
    },
    {
        id: 2,
        name: "John Mathew",
        role: "Backpacker",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 4,
        date: "2024-05-12",
        comment: "Had an incredible time. Perfect guidance and a well-planned itinerary. I would definitely recommend them to anyone looking for a real adventure.",
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Trekker",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
        date: "2024-07-20",
        comment: "Loved every bit of it. The views, the people, the trek — all unforgettable. Kudos to the team for making it so seamless and safe.",
    },
    {
        id: 4,
        name: "Karan Joshi",
        role: "Explorer",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        rating: 5,
        date: "2024-08-05",
        comment: "Such a memorable trip! The guides and team were very friendly and experienced. Felt safe the entire time even on the most challenging sections.",
    },
    {
        id: 5,
        name: "Neha Agarwal",
        role: "Photographer",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        rating: 4,
        date: "2024-09-14",
        comment: "Fantastic arrangements and beautiful trails. The locations were stunning and I got incredible shots. Will definitely join again next season!",
    },
    {
        id: 6,
        name: "Arjun Menon",
        role: "First-Timer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2024-10-03",
        comment: "An absolutely life-changing experience. The AMAS team made our Himalayan trek both safe and unforgettable. Truly passionate about nature and adventure.",
    },
    {
        id: 7,
        name: "Sneha Thomas",
        role: "Nature Enthusiast",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        date: "2024-11-18",
        comment: "The valley crossing during monsoon was a rush of adrenaline I will never forget. Everything was perfectly organized. Highly recommended for anyone seeking real adventure.",
    },
];
// ============================================================
// WHY US
// ============================================================
export const MOCK_WHY_US = {
    eyebrow: "Why Choose AMAS Kerala",
    heading: "Why people <span>choose us</span>",
    subheading: "We combine years of expedition experience with a genuine passion for making adventure safe, accessible, and unforgettable.",
    badge: {
        value: "18+",
        label: "Years of Trust",
    },
    images: [
        "https://amaskerala.org/assets/images/home/why-trust/rock-climbing.jpg",
        "https://amaskerala.org/assets/images/home/40-adventures/resized/rock-climbing.jpg",
        "https://amaskerala.org/assets/images/home/40-adventures/resized/sailing.jpg",
    ],
    reasons: [
        {
            id: 1,
            icon: "fa-solid fa-mountain",
            title: "Expert Instructors",
            subcontent: "Our team consists of trained mountaineers with years of real-world expedition experience.",
        },
        {
            id: 2,
            icon: "fa-solid fa-shield-halved",
            title: "Uncompromised Safety",
            subcontent: "We follow strict international standards for safety equipment and protocols on every activity.",
        },
        {
            id: 3,
            icon: "fa-solid fa-compass",
            title: "Wide Range of Activities",
            subcontent: "From high-altitude treks to rock climbing and rope courses, we cover it all under one roof.",
        },
        {
            id: 4,
            icon: "fa-solid fa-indian-rupee-sign",
            title: "Affordable Packages",
            subcontent: "We believe adventure should be accessible to everyone, with packages for every budget.",
        },
        {
            id: 5,
            icon: "fa-solid fa-people-group",
            title: "Community First",
            subcontent: "From student programs to corporate outings, we tailor every experience for your group.",
        },
        {
            id: 6,
            icon: "fa-solid fa-award",
            title: "Certified & Recognised",
            subcontent: "Affiliated with national adventure sports bodies and trusted by schools and institutions.",
        },
    ],
};

// ============================================================
// ABOUT US
// ============================================================
export const MOCK_ABOUT = {
    eyebrow: "Est. 2006 · Kerala, India",
    heading: "Our <span>Journey</span>",
    paragraphs: [
        "Adventure Mountaineering and Survival Kerala (AMAS) was born from a deep love for the mountains and the spirit of adventure. What started as a small group of outdoor enthusiasts has grown into one of Kerala's most respected NGOs in mountaineering and adventure sports.",
        "The motivation was simple – to reconnect people with nature, teach survival skills, and build mental and physical resilience through outdoor challenges. We've since trained hundreds of participants and organised numerous treks, rope courses, and mountaineering expeditions.",
        "Today, AMAS continues to inspire people of all ages to break limits, discover their strength, and cultivate discipline and confidence. We are proud of the lives we've touched and the trails we've blazed together.",
    ],
    mission: {
        title: "Inspire. Empower. Conquer.",
        body: "To make adventure sports accessible to all, nurture a culture of safety and discipline, and build a community of confident, nature-loving individuals across Kerala and beyond.",
    },
    values: [
        "Safety First", "Community Driven", "Certified Training",
        "Nature Respect", "Inclusive", "Affordable",
    ],
    team: {
        eyebrow: "The People Behind AMAS",
        heading: "Meet Our <span>Team</span>",
    },
};

// ============================================================
// TREK OVERVIEW (single trek mock — maps to /treks/get_trek_data/:id)
// ============================================================
export const MOCK_TREK_OVERVIEW = {

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
// ============================================================
// MOCK FUNCTIONS
// ------------------------------------------------------------
// Same signatures as api.js so any component can swap
// import source without changing anything else.
// ============================================================

export async function fetchNavData() { return MOCK_NAV_DATA; }
export async function fetchAllTrekData() { return MOCK_TREKS; }
export async function fetchTrekDataById(id) { return MOCK_TREKS.find((t) => String(t.id) === String(id)) ?? null; }
export async function fetchAllTeamMembers() { return MOCK_TEAM; }
export async function fetchTeamMemberById(id) { return MOCK_TEAM.find((m) => String(m.id) === String(id)) ?? null; }
export async function fetchAllReviews() { return MOCK_REVIEWS; }
export async function fetchAllEvents() { return MOCK_EVENTS; }
export async function fetchEventById(id) { return MOCK_EVENTS.find((e) => String(e.id) === String(id)) ?? null; }
export async function fetchAllActivities() { return MOCK_ACTIVITIES; }
export async function fetchOrgStats() { return MOCK_STATS; }
export async function submitContactForm(data) {
    console.log("[Mock] Contact form submitted:", data);
    return { success: true, message: "Thank you! We will get back to you within 24 hours." };
}
export async function fetchLandingData() { return MOCK_LANDING; }
export async function fetchHomeData() { return MOCK_HOME; }
export async function fetchOfferedActivities() { return MOCK_OFFERED_ACTIVITIES; }
export async function fetchTeamLegacyData() { return MOCK_TEAM_LEGACY; }
export async function fetchWhyUsData() { return MOCK_WHY_US; }
export async function fetchAboutData() { return MOCK_ABOUT; }