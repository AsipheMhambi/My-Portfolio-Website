import React, { useState } from 'react';
import './Contact.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
    };

    return (
        <section className="contact-section">
            <div className="wrapper">
                <div className="contact-wrap">
                    <h3>Send us a message</h3>
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                        <textarea className="form-control" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="info-wrap">
                    <h3>Contact us</h3>
                    <p><strong>Address:</strong> </p>
                    <p><strong>Phone:</strong> </p>
                    <p><strong>Email:</strong> </p>
                    <p><strong>Website:</strong> </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
