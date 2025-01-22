import React from "react";
import '../css/about.css';
import member1 from "../assets/images/fakhar.jpeg";
import member2 from "../assets/images/zain.jpeg";
import member3 from "../assets/images/faizan.jpeg";

const About = () => {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <div className="hero">
        <h1>SmartQuery</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About the Project</h2>
        <p>
          Welcome to SmartQuery, your intelligent solution for data analysis and exploration.
          SmartQuery harnesses the power of advanced algorithms and machine learning to sift
          through vast datasets effortlessly, delivering actionable insights in seconds. Whether
          you're a business analyst, researcher, or data enthusiast, SmartQuery empowers you to
          uncover hidden patterns, trends, and correlations within your data, enabling smarter
          decision-making and driving innovation.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="cards">
          <Card memberImage={member1} name="M Fakhar Rizwan" role="Project Lead & Web Developer" />
          <Card memberImage={member2} name="Zain Nadeem" role="Project Manager" />
          <Card memberImage={member3} name="Faizan Ali Shah" role="UI/UX Designer" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ memberImage, name, role }) => {
  return (
    <div className="card">
      {/* Front Side */}
      <div
        className="card-img"
        style={{ backgroundImage: `url(${memberImage})` }}
      ></div>

      {/* Back Overlay Content */}
      <div className="card-overlay">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
      </div>
    </div>
  );
};

export default About;

