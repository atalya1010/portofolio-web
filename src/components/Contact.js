// src/components/Contact.js
import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="main-container">
    <div className="contact">
      <h1>Contact</h1>
      <p>Feel free to reach out if you have any questions, want to collaborate, or just want to say hello. I'll get back to you as soon as possible!</p>
    </div>

    <form className="contact-form">
      <div>
        <input type="text" name="name" id="Name" placeholder="Your Name" />
      </div>
      <div>
        <input type="email" name="email" id="Email" placeholder="Your Email" />
      </div>
      <div>
        <textarea name="message" id="Message" cols="30" rows="10" placeholder="Your Message"></textarea>
      </div>
      <div>
        <button type="submit" className="btn-submit">Send Message</button>
      </div>
    </form>
  </section>
  );
};

export default Contact;
