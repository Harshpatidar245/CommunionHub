import React, { useState } from 'react';
import './EventForm.css';

function EventForm({ onAddEvent }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Social',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventData);
    setEventData({
      title: '',
      date: '',
      location: '',
      category: 'Social',
      description: ''
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Event Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={eventData.category}
          onChange={handleChange}
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
          <option value="Educational">Educational</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
      </div>
      
      <button type="submit" className="submit-button">Add Event</button>
    </form>
  );
}

export default EventForm;