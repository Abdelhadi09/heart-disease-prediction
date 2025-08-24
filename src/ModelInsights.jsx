import React from 'react';
import { Link } from 'react-router-dom';
import './ModelInsights.css';

export default function ModelInsights() {
  return (
    <div className="modelinsights-root">
      <div className="layout-container">
        <header className="modelinsights-header">
          <div className="modelinsights-header-title">
            <div className="size-4">{/* SVG logo here if needed */}</div>
            <h2 id='logo' className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Health Insights</h2>
          </div>
          <div className="modelinsights-header-nav">
            <div className="modelinsights-header-links">
              <Link className="modelinsights-header-link" to="/">Home</Link>
              <Link className="modelinsights-header-link" to="#">About</Link>
              <Link className="modelinsights-header-link" to="#">Contact</Link>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3d98f4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
              <Link to="/patient" className="modelinsights-header-link" ></Link>
            </button>
          </div>
        </header>
        <div className="modelinsights-content">
          <div className="layout-content-container">
            <div className="modelinsights-title">
              <p className="modelinsights-title-text">About the Heart Disease Classifier</p>
            </div>
            <p className="modelinsights-section-desc">
              The Heart Disease Classifier is a machine learning model designed to predict the probability of heart disease in patients based on their health data. This model was
              developed using a comprehensive dataset of patient records, incorporating various risk factors such as age, cholesterol levels, blood pressure, and other relevant
              health indicators. The goal is to provide a tool that can assist healthcare professionals in early detection and risk assessment of heart disease.
            </p>
            <h2 className="modelinsights-section-title">Model Development</h2>
            <p className="modelinsights-section-desc">
              The model was trained using a supervised learning approach, specifically a gradient boosting algorithm, known for its high accuracy and ability to handle complex
              datasets. The dataset was preprocessed to handle missing values and ensure data quality. Feature engineering techniques were applied to enhance the predictive power
              of the model. The model's performance was rigorously evaluated using metrics such as accuracy, precision, recall, and F1-score to ensure its reliability and
              effectiveness.
            </p>
            <h2 className="modelinsights-section-title">Features</h2>
            <p className="modelinsights-section-desc">
              The Heart Disease Classifier utilizes a range of features derived from patient health data, including: - Age - Gender - Chest Pain Type - Resting Blood Pressure -
              Serum Cholesterol - Fasting Blood Sugar - Resting Electrocardiographic Results - Maximum Heart Rate Achieved - Exercise-Induced Angina - ST Depression Induced by
              Exercise Relative to Rest - The Slope of the Peak Exercise ST Segment - Number of Major Vessels Colored by Fluoroscopy - Thalassemia These features were selected
              based on their known association with heart disease risk, as identified in medical literature and expert consultation.
            </p>
            <h2 className="modelinsights-section-title">Performance Metrics</h2>
            <p className="modelinsights-section-desc">
              The model's performance was evaluated on a held-out test set to ensure unbiased assessment. The key performance metrics are as follows: - Accuracy: 92% (proportion of
              correctly classified instances) - Precision: 90% (proportion of true positive predictions among all positive predictions) - Recall: 94% (proportion of true positive
              predictions among all actual positive instances) - F1-Score: 92% (harmonic mean of precision and recall) These metrics indicate that the model achieves high accuracy
              and a balanced performance in identifying patients at risk of heart disease.
            </p>
            <h2 className="modelinsights-section-title">Limitations</h2>
            <p className="modelinsights-section-desc">
              While the Heart Disease Classifier demonstrates promising results, it is important to acknowledge its limitations. The model's predictions are based on the available
              data and may not capture all factors influencing heart disease risk. It should be used as a supportive tool for clinical decision-making and not as a replacement for
              professional medical advice. Further research and validation with diverse patient populations are ongoing to improve the model's generalizability and robustness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
