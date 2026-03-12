// src/api/api.js
// ============================================================
// API SERVICE — Adventure NGO
// ------------------------------------------------------------
// All functions call the real Spring backend.
// During development, import from mockData.js instead:
//
//   import { fetchAllTrekData } from './mockData.js'  ← mock
//   import { fetchAllTrekData } from './api.js'        ← live
//
// BASE_URL is read from .env:
//   VITE_API_BASE_URL=http://localhost:8080
// ============================================================

export const BASE_URL =
    "http://localhost:8080";

// ── All endpoint paths in one place ──────────────────────────
export const ENDPOINTS = {

    GET_HOME: "/home/get_home",

    // Treks
    GET_ALL_TREK_DATA: "/treks/get_all_trek_data",
    GET_TREK_DATA: "/treks/get_trek_data",        // + /:id

    // Team
    GET_ALL_TEAM_MEMBERS: "/team/get_all_team_members",
    GET_TEAM_MEMBER: "/team/get_team_member",    // + /:id

    // Reviews
    GET_ALL_REVIEWS: "/reviews/get_all_reviews",

    // Events
    GET_ALL_EVENTS: "/events/get_all_events",
    GET_EVENT: "/events/get_event",              // + /:id

    // Activities
    GET_ALL_ACTIVITIES: "/activities/get_all_activities",

    // Navigation
    GET_NAVIGATION: "/navigation/get_navigation",

    // Stats
    GET_ORG_STATS: "/stats/get_org_stats",

    // Contact
    POST_CONTACT_FORM: "/contact/submit",

    GET_LANDING: "/landing/get_landing",

    GET_OFFERED_ACTIVITIES: "/activities/get_offered_activities",

    GET_TEAM_LEGACY: "/team/get_team_legacy",

    GET_WHY_US: "/whyus/get_why_us",

    GET_ABOUT: "/about/get_about",
};

// HOME PAGE
export async function fetchHomeData() {
    return apiRequest(ENDPOINTS.GET_HOME);
}

// ── Generic fetch wrapper ─────────────────────────────────────
async function apiRequest(endpoint, method = "GET", body = null) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    return response.json();
}

// ============================================================
// NAVIGATION
// ============================================================
export async function fetchNavData() {
    return apiRequest(ENDPOINTS.GET_NAVIGATION);
}

// ============================================================
// TREKS
// ============================================================
export async function fetchAllTrekData() {
    return apiRequest(ENDPOINTS.GET_ALL_TREK_DATA);
}

export async function fetchTrekDataById(id) {
    return apiRequest(`${ENDPOINTS.GET_TREK_DATA}/${id}`);
}

// ============================================================
// TEAM
// ============================================================
export async function fetchAllTeamMembers() {
    return apiRequest(ENDPOINTS.GET_ALL_TEAM_MEMBERS);
}

export async function fetchTeamMemberById(id) {
    return apiRequest(`${ENDPOINTS.GET_TEAM_MEMBER}/${id}`);
}

// ============================================================
// REVIEWS / TESTIMONIALS
// ============================================================
export async function fetchAllReviews() {
    return apiRequest(ENDPOINTS.GET_ALL_REVIEWS);
}

// ============================================================
// EVENTS
// ============================================================
export async function fetchAllEvents() {
    return apiRequest(ENDPOINTS.GET_ALL_EVENTS);
}

export async function fetchEventById(id) {
    return apiRequest(`${ENDPOINTS.GET_EVENT}/${id}`);
}

// ============================================================
// ACTIVITIES
// ============================================================
export async function fetchAllActivities() {
    return apiRequest(ENDPOINTS.GET_ALL_ACTIVITIES);
}

// ============================================================
// ORG STATS
// ============================================================
export async function fetchOrgStats() {
    return apiRequest(ENDPOINTS.GET_ORG_STATS);
}

// ============================================================
// CONTACT FORM  (POST)
// ============================================================
export async function submitContactForm(formData) {
    return apiRequest(ENDPOINTS.POST_CONTACT_FORM, "POST", formData);
}

// ============================================================
// LANDING / HERO
// ============================================================
export async function fetchLandingData() {
    return apiRequest(ENDPOINTS.GET_LANDING);
}

// OFFERED ACTIVITIES
export async function fetchOfferedActivities() {
    return apiRequest(ENDPOINTS.GET_OFFERED_ACTIVITIES);
}

// TEAM LEGACY
export async function fetchTeamLegacyData() {
    return apiRequest(ENDPOINTS.GET_TEAM_LEGACY);
}

// WHY US
export async function fetchWhyUsData() {
    return apiRequest(ENDPOINTS.GET_WHY_US);
}

// ABOUT US
export async function fetchAboutData() {
    return apiRequest(ENDPOINTS.GET_ABOUT);
}