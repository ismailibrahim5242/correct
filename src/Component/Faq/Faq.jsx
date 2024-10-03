import React from 'react';



const FAQ = () => {
  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq">
        <h2>What services do you offer?</h2>
        <p>We offer [list of services].</p>
      </div>
      
      <div className="faq">
        <h2>How can I contact you?</h2>
        <p>You can reach us via our contact page or email us at [email address].</p>
      </div>
      
      <div className="faq">
        <h2>What are your hours of operation?</h2>
        <p>Our office is open from [time] to [time], Monday through Friday.</p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  );
};

export default FAQ;
