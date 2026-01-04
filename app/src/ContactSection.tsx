'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import { CONTACT_ITEMS } from './constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Sanitize inputs
    const sanitizedName = DOMPurify.sanitize(formData.name);
    const sanitizedEmail = DOMPurify.sanitize(formData.email);
    const sanitizedMessage = DOMPurify.sanitize(formData.message);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'service_gfnn3io',
        'template_8j6er2t',
        {
          from_name: sanitizedName,
          from_email: sanitizedEmail,
          message: sanitizedMessage,
          to_email: 'vikashvarrajan19@gmail.com'
        },
        'hux3bZDF6SpFV8gME'
      );

      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Have Questions?</h3>
            <p>We're here to help! Reach out to us and we'll get back to you as soon as possible.</p>
            <div className="contact-details">
              {CONTACT_ITEMS.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-block" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}