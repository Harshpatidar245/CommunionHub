import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import './EventsPage.css';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Load events from localStorage on component mount
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
      setFilteredEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    // Apply filtering
    if (filter === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === filter));
    }
  }, [filter, events]);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, { ...newEvent, id: Date.now() }];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="events-page">
      <h1>Community Events</h1>
      
      <div className="filter-section">
        <label htmlFor="category-filter">Filter by category: </label>
        <select
          id="category-filter"
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="All">All Events</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
          <option value="Educational">Educational</option>
        </select>
      </div>
      
      <div className="events-container">
        <div className="events-list-container">
          <h2>Upcoming Events</h2>
          <EventList events={filteredEvents} />
        </div>
        
        <div className="event-form-container">
          <h2>Add New Event</h2>
          <EventForm onAddEvent={addEvent} />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;