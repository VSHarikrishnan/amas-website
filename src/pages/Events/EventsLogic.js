export const sortTreks = (treks, sortBy) => {
    switch (sortBy) {
        case 'name':
            return [...treks].sort((a, b) => a.name.localeCompare(b.name));
        case 'price':
            return [...treks].sort((a, b) => a.price - b.price);
        case 'date':
            return [...treks].sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'rating':
            return [...treks].sort((a, b) => b.rating - a.rating);
        case 'likes':
            return [...treks].sort((a, b) => b.likes - a.likes);
        default:
            return treks;
    }
};

export const filterTreks = (treks, filters) => {
    return treks.filter(trek => {
        const matchesSearch = trek.name.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            trek.description.toLowerCase().includes(filters.searchText.toLowerCase());

        const matchesType = !filters.eventType || trek.badge === filters.eventType;

        return matchesSearch && matchesType;
    });
};
