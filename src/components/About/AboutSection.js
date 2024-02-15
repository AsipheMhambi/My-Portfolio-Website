import React, { useState } from 'react';
import './About.css';
import image from './images/ace.png';
import { FaGithub, FaFacebook } from "react-icons/fa";

const AboutSection = () => {
    const [showMoreStory, setShowMoreStory] = useState(false);
    const [showMoreJourney, setShowMoreJourney] = useState(false);

    const toggleStory = (e) => {
        e.preventDefault();
        setShowMoreStory(!showMoreStory);
    };

    const toggleJourney = (e) => {
        e.preventDefault();
        setShowMoreJourney(!showMoreJourney);
    };

    return (
        <section className="about" id="about">
            <div className="left-container">
                <div className='left-cont'>
                    <div className="my-story">
                        <h2>My Story</h2>
                        <br />
                        <p>Hello, I'm ASIPHE MHAMBI</p>
                        <br />
                        <p>I studied Information Technology, focusing on Support Services and networking. I earned a national diploma in this field. Now, let me share a bit about my journey in the tech world.</p>
                        <br />
                        
                        <p>I started as a network technician, dealing with the nuts and bolts of computer networks. It was a solid start, and I learned a lot. But, as technology rapidly grew, I felt the urge to try something new.</p>
                        <br />
                        {showMoreStory ? (
                            <>
                                <p>So, I made a big decision - I switched from being a network technician to becoming a software developer. 
                                <br/>
                                Why? Well, I saw the tech world changing fast, and I wanted to be part of the group of developers making cool stuff.</p>
                                <button type="button" onClick={toggleStory}>Read Less</button>
                            </>
                        ) : (
                            <button type="button" onClick={toggleStory}>Read More</button>
                        )}
                    </div>
                </div>
            </div>

            <div className='image-container'>
                <div className="aboutImage" />
                <img src={image} alt="Asiphe Mhambi" />
            </div>
            <p1>Software Developer</p1>

            <div className="right-container">
                <div className='right-cont'>
                    <div className="my-journey">
                        <h2>My Journey</h2>
                        <br />
                        <p> Hello, get motivated</p>
                        <br />
                        <p>Switching career isn't easy. Imagine going from fixing networks to creating software - it's like switching gears in a car. But, I took on the challenge. I wanted to grow with the tech industry and be among the folks building great things.</p>
                        <br />
                        <p>Now, my journey involves coding and solving problems every day. It's been tough at times, but also incredibly rewarding. I'm not just a network person anymore; I'm now a software developer. </p>
                        
                        <br />
                        {showMoreJourney ? (
                            <>
                                <p>I'm excited about what the future holds in this ever-changing tech world.</p>
                                <p>Come along with me on this adventure through the world of software development. Let's explore together and see what we can create!</p>
                                <button type="button" onClick={toggleJourney}>Read Less</button>
                            </>
                        ) : (
                            <button type="button" onClick={toggleJourney}>Read More</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="amedia-icons">
                <div className='facebook'>
                    <a href="https://www.facebook.com/profile.php?id=100092504071844"><FaFacebook style={{ color: '#3b5998', fontSize: '40px' }}/></a>
                </div>
                <div className='github'><a href="https://github.com/AsipheMhambi?tab=repositories"><FaGithub style={{ color: '#24292e', fontSize: '40px' }} /></a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
