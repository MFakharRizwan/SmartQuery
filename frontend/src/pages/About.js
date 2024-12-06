import React from 'react';
import member1 from '../assets/images/fakhar.jpeg';
import member2 from '../assets/images/zain.jpeg';
import member3 from '../assets/images/faizan.jpeg';
import '../css/about.css';

const About = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <h1>SmartQuery</h1>
      </div>
      <div className="about-section">
        <h2><strong>About the Project</strong></h2>
        <p>Welcome to SmartQuery, your intelligent solution for data analysis and exploration. SmartQuery harnesses the power of advanced algorithms and machine learning to sift through vast datasets effortlessly, delivering actionable insights in seconds. Whether you're a business analyst, researcher, or data enthusiast, SmartQuery empowers you to uncover hidden patterns, trends, and correlations within your data, enabling smarter decision-making and driving innovation.</p>
      </div>
      
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="cards">
          <Card memberImage={member1} name="M Fakhar Rizwan" />
          <Card memberImage={member2} name="Zain Nadeem" />
          <Card memberImage={member3} name="Faizan Ali Shah"/>
        </div>
      </div>
    </div>
  );
}

const Card = ({ memberImage, name, role }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="img" style={{ backgroundImage: `url(${memberImage})` }}></div>
          <div className="front-content">
            <small className="badge">Team Member</small>
            <div className="description">
              <div className="title">
                <p className="name"><strong>{name}</strong></p>
                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                  </g>
                </svg>
              </div>
              <p className="role">{role}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            <strong>{name}</strong>
            <p>WEB DEVELOPER.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;