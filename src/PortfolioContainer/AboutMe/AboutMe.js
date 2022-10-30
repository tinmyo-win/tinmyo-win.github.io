import React from "react";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import profilePhoto from '../../assets/AboutMe/me.jpg'
import './AboutMe.css'

const AboutMe = (props) => {
    const SCREEN_CONSTANTS = {
        descriptions: `Hi! I'm Tin Myo Win and I enjoy coding that can solve the problem.
            My interest in programming started back in 2015 when I was first year student
            at University of Technology(Yatanapon CyberCity). My main focus these days is
            building accessible and powerful apps`,
        highlights: {
            bullets: [
                'JavaScript (ES6+)',
                'React',
                'Node.js',
                'Laravel',
                'Mongo DB',
            ],
            heading: 'Here are few technologies I\'ve been working recently'
        }
    }

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return(
        <div id="about" className="about-me-container">
            <div className="about-me-parent">
                <ScreenHeading title='About Me' subHeading='Why Choose Me' />
                <div className="about-me-card">
                <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.descriptions}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <a href="#contact">
                                <button className="btn primary-btn">
                                    Hire Me{" "}
                                </button>
                            </a>
                            <a
                                href="Tin_Myo Win_Resume.pdf"
                                download={"Tin_Myo Win_Resume.pdf"}
                                >
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="about-me-profile">
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe;