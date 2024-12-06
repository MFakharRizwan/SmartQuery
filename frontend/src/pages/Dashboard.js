import React from "react";
import '../css/Dashboard.css';
import PredictionForm from '../components/PredictionForm';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content"> 
      <h1>Your Questions Answered!</h1>
        <p>Discover the answers to common inquiries about our digital agency and services.</p>
      <PredictionForm />
      <h2>General FAQs</h2>
        <p>Get insights into our expertise, industry focus, and what sets us apart from the competition.</p>
      </div>
      
    </div>
  );
};

export default Dashboard;