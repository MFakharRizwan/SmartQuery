import React from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  const handleBotClick = () => {
    window.open("http://localhost:5000/prediction", "_blank");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Your Questions Answered!</h1>
        <p className="subtext">
          Discover the answers to common inquiries about our digital agency and services.
        </p>
        <button className="bot-button" onClick={handleBotClick}>
          Start Query
        </button>

        <div className="faq-section">
          <h2>General FAQs</h2>
          <p>
            Get insights into our expertise, industry focus, and what sets us apart from the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

