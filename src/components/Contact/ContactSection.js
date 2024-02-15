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
            <div className="info-wrap">
                <div className='info-wrap-cont'>
                <h3>GET IN TOUCH</h3>
                <p><strong>Address:</strong> </p>
                <p><strong>Phone:</strong> </p>
                <p><strong>Email:</strong> </p>
                <p><strong>Website:</strong> </p>
                </div>
            </div>
            <div className="contact-form reveal">
                <h3>Send Message</h3>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <textarea name="message" rows="8" cols="80" placeholder="Message" onChange={handleChange}></textarea>
                    </div>
                    <div className="send-btn">
                <a href="#">Send</a>
            </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;

