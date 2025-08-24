import React from 'react';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client";
import './Home.css';

export default function Home() {
  return (
    <div className="home-root">
      <div className="layout-container">
        <header className="home-header">
          <div className="home-header-title">
            <div className="size-4">{/* SVG logo here if needed */}</div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Health Insights</h2>
          </div>
          <div className="home-header-nav">
            <div className="home-header-links">
              <Link className="home-header-link" to="/">Overview</Link>
              <Link className="home-header-link" to="/patient">Predict</Link>
              <Link className="home-header-link" to="/insights">Documentation</Link>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-white" data-icon="Question" data-size="20px" data-weight="regular">{/* Question SVG here if needed */}</div>
            </button>
          </div>
        </header>
        <div className="home-content">
          <div className="layout-content-container">
            <div className="home-title">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="home-title-text">Heart Disease Classifier</p>
                <p className="home-title-desc">
                  This tool uses a machine learning model to predict the probability of heart disease based on patient data. It analyzes various factors to provide an estimated
                  risk level, aiding in early detection and preventive care.
                </p>
              </div>
            </div>
            <h2 className="home-section-title">Recent Predictions</h2>
            <div className="home-stats">
              {[
                { label: 'Total Predictions', value: '125', change: '+10%', pos: true },
                { label: 'Average Probability', value: '15%', change: '-5%', pos: false },
                { label: 'High Risk Predictions', value: '12', change: '+20%', pos: true }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ display: 'flex', flex: 1 }}
                  className="home-stat-card"
                >
                  <p className="home-stat-label">{stat.label}</p>
                  <p className="home-stat-value">{stat.value}</p>
                  <p className={stat.pos ? "home-stat-change-pos" : "home-stat-change-neg"}>{stat.change}</p>
                </motion.div>
              ))}
            </div>
            <h2 className="home-section-title">How to Use</h2>
            <p className="home-section-desc">
              To get started, navigate to the 'Predict' tab. You'll be prompted to enter patient information, including age, gender, blood pressure, cholesterol levels, and other
              relevant health metrics. Once you've entered the data, click 'Predict' to receive the model's assessment of heart disease probability. The results will be displayed
              along with guidance on interpreting the risk level and potential next steps.
            </p>
            <h2 className="home-section-title">Understanding the Results</h2>
            <p className="home-section-desc">
              The prediction result is presented as a probability percentage, indicating the likelihood of heart disease. A higher percentage suggests a greater risk. It's
              important to note that this tool is not a substitute for professional medical advice. Always consult with a healthcare provider for diagnosis and treatment decisions.
              The 'History' tab allows you to review past predictions, providing a record of assessments over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
