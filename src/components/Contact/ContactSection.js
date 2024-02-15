import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
        // 
        console.log(formData);
    };

    return (
        <section className="contact-section" id='contact'>
            <div className="info-wrap">
            <div className="left-side">
        <div className="address details">
            <FaMapMarkerAlt size={50}/>
          <div className="topic">Address</div>
          <div className="text-one">Mjekula Cresent, Langa</div>
          <div className="text-two">Western Cape, 7544</div>
        </div>
        <div className="phone details">
            <FaPhoneAlt size={50}/>
          <div className="topic">Phone</div>
          <div className="text-one">071 0057 627</div>
          <div className="text-two">083 7457 171</div>
        </div>
        <div className="email details">
            <FaEnvelope size={50}/>
          <div className="topic">Email</div>
          <div className="text-one">amhambi95@gmail.com</div>
          <div className="text-two">Asiphe.Mhambi@younglings.africa</div>
        </div>
      </div>
            </div>
            <div className="contact-form reveal">
                <h3>Send Message</h3>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Surname" onChange={handleChange} />
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

