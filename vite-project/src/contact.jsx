import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: 'This field is required' });
    } else if (e.target.name === 'email' && !validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !validateEmail(formData.email)) {
      // handle form submission errors
      return;
    }
    // form submission logic here
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          onBlur={handleBlur} 
        />
        {errors.name && <span>{errors.name}</span>}
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          onBlur={handleBlur} 
        />
        {errors.email && <span>{errors.email}</span>}
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          onBlur={handleBlur} 
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;