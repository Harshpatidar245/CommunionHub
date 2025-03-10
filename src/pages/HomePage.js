import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Connecting People Across Faiths & Interests</h1>
          <p>
            CommunionHub brings together individuals from diverse religious backgrounds and 
            interests to foster understanding, community, and shared experiences.
          </p>
          <Link to="/events" className="cta-button">
            Explore Events
          </Link>
        </div>
      </section>
      
      <section className="welcome-section">
        <h2>Welcome to CommunionHub</h2>
        <p>
          Connecting people of all faiths through events and community support. Our platform 
          makes it easy to find, join, and create events that bring people together.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Discover Events</h3>
            <p>Find events happening in your community that align with your interests.</p>
          </div>
          <div className="feature">
            <h3>Connect with Others</h3>
            <p>Meet people from diverse backgrounds who share common values.</p>
          </div>
          <div className="feature">
            <h3>Create Gatherings</h3>
            <p>Organize your own events and build community around shared interests.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;