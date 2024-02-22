import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

// Define the ContactSection component
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    const [messageSent, setMessageSent] = useState(false);
    const [shake, setShake] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        if (!formData.name || !formData.surname || !formData.email || !formData.message) {
            setShake(true); // Shake the popup if form fields are not filled out
            setTimeout(() => {
                setShake(false);
            }, 500);
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        emailjs.sendForm('service_smaz2tv', 'template_3ulzioe', e.target, 'YHUs78CNHJAZi-QwB')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true); // Set messageSent to true when message is sent successfully
            }, (error) => {
                console.log(error.text);
            });

        setFormData({
            name: '',
            surname: '',
            email: '',
            message: ''
        });
    };

    const handleOkClick = () => {
        setMessageSent(false); // Close the popup
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
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-box">
                        <textarea name="message" rows="8" cols="80" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="send-btn">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
            {messageSent && (
                <div className={`popup ${shake ? 'shake' : ''}`}>
                    <div className="popup-content">
                        <div className="celebration-animation">🎉</div>
                        <div className="message">Message sent successfully!</div>
                        <button onClick={handleOkClick}>Ok</button>
                    </div>
                </div>
            )}
            <footer className="footer">
                <div className="footer-text">
                    © 2024 Asiphe Mhambi | Designed by Asiphe Mhambi
                </div>
            </footer>
        </section>
    );
};

export default ContactSection;
