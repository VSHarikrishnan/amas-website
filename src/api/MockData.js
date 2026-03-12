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
// REVIEWS / TESTIMONIALS
// ============================================================
export const MOCK_REVIEWS = [
    {
        id: 1,
        name: "Arjun Menon",
        location: "Kochi, Kerala",
        avatar: "/assets/images/testimonials/arjun.jpg",
        rating: 5,
        text: "An absolutely life-changing experience. The AMAS team made our Himalayan trek both safe and unforgettable. The guides were knowledgeable, caring, and truly passionate about nature.",
        trekId: "valley-of-flowers",
        trekTitle: "Valley of Flowers Trek",
        date: "2024-11",
    },
    {
        id: 2,
        name: "Priya Nair",
        location: "Thiruvananthapuram",
        avatar: "/assets/images/testimonials/priya.jpg",
        rating: 5,
        text: "I was a complete beginner and was nervous about rock climbing. The instructors were patient and encouraging. I summited my first wall and cried happy tears at the top!",
        trekId: "rock-face-challenge",
        trekTitle: "Rock Face Challenge",
        date: "2024-10",
    },
    {
        id: 3,
        name: "Rahul Krishnan",
        location: "Kozhikode, Kerala",
        avatar: "/assets/images/testimonials/rahul.jpg",
        rating: 5,
        text: "The coastal camping trip was magical. Waking up to the sound of waves, the bonfire nights, the stars — everything was perfectly organized. Already booked for next year!",
        trekId: "coastal-camping",
        trekTitle: "Coastal Camping",
        date: "2024-09",
    },
    {
        id: 4,
        name: "Sneha Thomas",
        location: "Thrissur, Kerala",
        avatar: "/assets/images/testimonials/sneha.jpg",
        rating: 4,
        text: "Wonderful team and great organization. The valley crossing during monsoon was a rush of adrenaline I will never forget. Highly recommended for anyone seeking real adventure.",
        trekId: "coastal-camping",
        trekTitle: "Monsoon Valley Crossing",
        date: "2024-08",
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