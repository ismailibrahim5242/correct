import React from 'react';
const About = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>Welcome to [Your Company]. We are dedicated to [your mission statement].</p>
      
      <h2>Our History</h2>
      <p>Founded in [Year], we started with the goal of [reason]. Since then, we've grown into [company achievements].</p>
      
      <h2>Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="/team-member1.jpg" alt="Team Member" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default About;
