import React from 'react';
import './EventList.css';

function EventList({ events }) {
  if (events.length === 0) {
    return <p className="no-events">No events found. Be the first to add one!</p>;
  }

  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <h3>{event.title}</h3>
          <div className="event-details">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
          </div>
          <p className="event-description">{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;