// Contact.js
import {Link} from 'react-router-dom';
import React from 'react';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>You can reach us at contact bmhotel@gmail.com</p>
        <Link to='/Contactus'>
          <button>Contact Us</button>
        </Link>
        {/* Add more contact information or a contact form here */}
      </div>
    </div>
  );
};

export default Contact;
