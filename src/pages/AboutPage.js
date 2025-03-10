import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About CommunionHub</h1>
          <p>Bringing communities together through understanding and shared experiences</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section mission">
          <h2>Our Mission</h2>
          <p>
            CommunionHub was founded with a simple yet powerful mission: to create bridges between 
            different faith communities and interest groups. We believe that meaningful connections 
            happen when people come together around shared experiences, even when their backgrounds 
            and beliefs may differ.
          </p>
          <p>
            Our platform provides a space where individuals and organizations can discover, create, 
            and participate in events that foster understanding, respect, and community building.
          </p>
        </div>

        <div className="about-section values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>We welcome people of all faiths, backgrounds, and identities.</p>
            </div>
            <div className="value-card">
              <h3>Respect</h3>
              <p>We foster environments where diverse perspectives are honored.</p>
            </div>
            <div className="value-card">
              <h3>Connection</h3>
              <p>We create opportunities for meaningful relationships to form.</p>
            </div>
            <div className="value-card">
              <h3>Growth</h3>
              <p>We encourage learning and personal development through community.</p>
            </div>
          </div>
        </div>

        <div className="about-section contact">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or interested in partnering with us? We'd love to hear from you!
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> harshpatidar2452004@gmail.com</p>
            <p><strong>Phone:</strong> 6265300768</p>
            <p><strong>Address:</strong> 123 Community Way,  City, ST 12345</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </section>

      {/* <section className="join-community">
        <div className="join-content">
          <h2>Join Our Community</h2>
          <p>
            Be part of a growing movement to build connections across different faiths and communities.
          </p>
          <button className="join-button">Sign Up for Updates</button>
        </div>
      </section> */}
    </div>
  );
}

export default AboutPage;