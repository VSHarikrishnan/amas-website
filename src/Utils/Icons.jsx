const iconMap = {
    hiking: "fa-solid fa-person-hiking",
    sailboat: "fa-solid fa-sailboat",
    globe: "fa-solid fa-earth-europe",
    mountainSun: "fa-solid fa-mountain-sun",
    route: "fa-solid fa-route",
    houseFlag: "fa-solid fa-house-flag",
    campground: "fa-solid fa-campground",
    tents: "fa-solid fa-tents",
    compass: "fa-solid fa-compass",
    tree: "fa-solid fa-tree",
    fire: "fa-solid fa-fire",
    caravan: "fa-solid fa-caravan",
    signsPost: "fa-solid fa-signs-post",
    mapLocation: "fa-solid fa-map-location",
    medicalKit: "fa-solid fa-kit-medical",
    snowboarding: "fa-solid fa-person-snowboarding",
    swimming: "fa-solid fa-person-swimming",
    walking: "fa-solid fa-person-walking",
    biking: "fa-solid fa-person-biking",
    community: "fa-solid fa-people-roof",
    clock: "fa-regular fa-clock",
    location: "fa-regular fa-location-pin",
    crossHair:"fa-solid fa-location-crosshairs"
};
export const getIconClass = (iconName) => {
    return iconMap[iconName] || "fa-solid fa-campground"; // Default icon if not found
}
export const getIcon = (iconName) => {
    const iconClass = getIconClass(iconName);
    return <i className={iconClass}></i>;
};

// import { getIconClass } from '../../Utils/Icons';