import React from 'react';
import { Link } from 'react-router-dom';
import main4 from '../assets/images/about.svg';
import main2 from '../assets/images/main2.svg';
import '../css/landing.css';

const Landing = () => (
  <>
    <div className="wrapper">
      <div id="home" className="container page">
        <div className="info">
          <h2>Welcome to the SmartQuery</h2>
          <p>Please log in or register to access your dashboard.</p>
          <Link to="/register" className="cssbuttons-io-button">
            Get started
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </Link>
        </div>
        <img src={main2} alt="question hunt" className="img main-img" />
      </div>
    </div>

    <div className="features-wrapper">
      <div className="features-container">
        <h2 className="title">Features</h2>
        <div className="cards">
          <FeatureCard 
            title="User-Friendly Interface"
            description="The app has an intuitive interface accessible to users of all skill levels, ensuring everyone can utilize its powerful tools."
          />
          <FeatureCard 
            title="Customizable Dashboard"
            description="Create and customize your dashboards to monitor the metrics that matter most to you."
          />
          <FeatureCard 
            title="Data Visualization"
            description="Transform complex data into clear, visual representations using charts, graphs, and maps."
          />
        </div>
      </div>
    </div>

    <div className="wrapper2">
      <div className="container page2">
        <div id="about" className="container about">
          <div className="webs">
            <h1>About <span>Us</span></h1>
            <p>
              SmartQuery empowers you to uncover hidden patterns, trends, and correlations within your data, enabling smarter decision-making and driving innovation.
            </p>
            <Link to="/about" className="cssbuttons-io-button">
              Get started
              <div className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </div>
            </Link>
          </div>
          <img src={main4} alt="Smartquery" className="webpic" />
        </div>
      </div>
    </div>

  </>
);

// FeatureCard Component for cleaner structure
const FeatureCard = ({ title, description }) => (
  <div className="card">
    <div className="align">
      <div className="red"></div>
      <div className="yellow"></div>
      <div className="green"></div>
    </div>
    <h3>{title}</h3>
    <hr />
    <p>{description}</p>
    <button className="btn btn-hero">Learn More</button>
  </div>
);

export default Landing;