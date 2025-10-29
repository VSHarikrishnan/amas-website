// src/api/api.js

const BASE_URL = "http://localhost:8080";

// Define all endpoints in one place
const ENDPOINTS = {
    GET_ALL_TREK_DATA: "/treks/get_all_trek_data",
    GET_TREK_DATA: "/treks/get_trek_data",
    GET_ALL_TEAM_MEMBERS: "/team/get_all_team_members",
    GET_TEAM_MEMBER: "/team/get_team_member",
    GET_ALL_REVIEWS: "/reviews/get_all_reviews",
};

// Generic fetch utility
async function apiRequest(endpoint, method = "GET", body = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
}

// ----------- API Methods ------------

// Fetch all treks
export async function fetchAllTrekData() {
    return await apiRequest(ENDPOINTS.GET_ALL_TREK_DATA);
}

// Fetch a single trek by ID
export async function fetchTrekDataById(id) {
    return await apiRequest(`${ENDPOINTS.GET_TREK_DATA}/${id}`);
}

// Fetch all team members
export async function fetchAllTeamMembers() {
    return await apiRequest(ENDPOINTS.GET_ALL_TEAM_MEMBERS);
}

// Fetch a team member by ID
export async function fetchTeamMemberById(id) {
    return await apiRequest(`${ENDPOINTS.GET_TEAM_MEMBER}/${id}`);
}
// Fetch all reviews
export async function fetchAllReviews() {
    return await apiRequest(ENDPOINTS.GET_ALL_REVIEWS);
}

// // Add a new trek
// export async function addTrek(trekData) {
//     return await apiRequest(ENDPOINTS.TREKS, "POST", trekData);
// }

// // User login
// export async function loginUser(credentials) {
//     return await apiRequest(ENDPOINTS.AUTH_LOGIN, "POST", credentials);
// }

// // User registration
// export async function registerUser(userData) {
//     return await apiRequest(ENDPOINTS.AUTH_REGISTER, "POST", userData);
// }

export { BASE_URL, ENDPOINTS };
