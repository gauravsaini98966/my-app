import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateFullName = (fullName) => {
    return fullName.length > 0;
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateContactNumber = (contactNumber) => {
    return contactNumber.length === 10;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case 'fullName':
        setFormErrors({ ...formErrors, fullName: validateFullName(value) ? '' : 'Please enter your full name.' });
        break;
      case 'email':
        setFormErrors({ ...formErrors, email: validateEmail(value) ? '' : 'Please enter a valid email address.' });
        break;
      case 'contactNumber':
        setFormErrors({ ...formErrors, contactNumber: validateContactNumber(value) ? '' : 'Please enter a valid contact number.' });
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formErrors.fullName || formErrors.email || formErrors.contactNumber) {
      return;
    }
    // Form is valid, submit the form data
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" name="fullName" onChange={handleInputChange} value={formData.fullName} />
      {formErrors.fullName && <p>{formErrors.fullName}</p>}

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
      {formErrors.email && <p>{formErrors.email}</p>}

      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="tel" name="contactNumber" onChange={handleInputChange} value={formData.contactNumber} />
      {formErrors.contactNumber && <p>{formErrors.contactNumber}</p>}

      <label htmlFor="message">Message:</label>
      <textarea name="message" onChange={handleInputChange} value={formData.message}></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;