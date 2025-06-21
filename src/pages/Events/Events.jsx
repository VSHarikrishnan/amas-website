import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';
import treksData from '../Treks/TrekData';
import { sortTreks, filterTreks } from './EventsLogic';
import TrekCard from '../../components/TrekCard/TrekCard';

const Events = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [sortBy, setSortBy] = useState('date');
    const [eventType, setEventType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [query, setQuery] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef();

    const formatDate = (date) => date.toISOString().split('T')[0];

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const match = treksData.find(e => e.date === formatDate(date));
            return match ? <div className="event-dot">📌</div> : null;
        }
    };

    const handleDateClick = (date) => {
        setSelectedDate(formatDate(date));
        setShowCalendar(false);
    };

    const handleSearch = () => {
        setSearchText(query.trim());
    };

    const handleClearFilters = () => {
        setSortBy('date');
        setEventType('');
        setQuery('');
        setSearchText('');
        setSelectedDate(null);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (calendarRef.current && !calendarRef.current.contains(e.target)) {
                setShowCalendar(false);
            }
        };
        if (showCalendar) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showCalendar]);

    const filteredTreks = filterTreks(treksData, { searchText, eventType });
    const sortedTreks = sortTreks(filteredTreks, sortBy);
    const eventsToDisplay = selectedDate
        ? sortedTreks.filter(e => e.date === selectedDate)
        : sortedTreks;

    return (
        <div className="upcoming-events-page">
            <h2 className="events-heading">Upcoming Treks & Events</h2>

            <div className="filter-sort-controls">
                <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                    <option value="">All Types</option>
                    <option value="Most popular">Most popular</option>
                    <option value="Beginner Friendly">Beginner Friendly</option>
                    <option value="Permit Required">Permit Required</option>
                    <option value="Weekend Trek">Weekend Trek</option>
                    <option value="Limited Entry">Limited Entry</option>
                </select>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="date">Sort by Date</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="likes">Sort by Likes</option>
                </select>

                <button className="calendar-btn" onClick={() => setShowCalendar(true)}>
                    View in Calendar 📅
                </button>

                <div className="search-wrapper">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="search-icon-btn" onClick={handleSearch}>🔍</button>
                </div>

                <button className="clear-btn" onClick={handleClearFilters}>Clear Filters</button>
            </div>

            {/* Calendar Modal */}
            {showCalendar && (
                <div className="calendar-modal" ref={calendarRef}>
                    <Calendar onClickDay={handleDateClick} tileContent={tileContent} />
                </div>
            )}

            <div className="event-grid">
                {eventsToDisplay.length > 0 ? (
                    eventsToDisplay.map((trek) => (
                        <TrekCard key={trek.id} trek={trek} />
                    ))
                ) : (
                    <p className="no-events-text">No matching events found</p>
                )}
            </div>
        </div>
    );
};

export default Events;
