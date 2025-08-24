import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './PredictionResult.css';

const sexMap = { '1': 'Male', '0': 'Female' };
const cpMap = {
  '0': 'Typical Angina',
  '1': 'Atypical Angina',
  '2': 'Non-anginal Pain',
  '3': 'Asymptomatic',
};
const fbsMap = { '1': '> 120 mg/dl', '0': '≤ 120 mg/dl' };
const restecgMap = {
  '0': 'Normal',
  '1': 'ST-T wave abnormality',
  '2': 'Left ventricular hypertrophy',
};
const exangMap = { '1': 'Yes', '0': 'No' };
const slopeMap = {
  '0': 'Upsloping',
  '1': 'Flat',
  '2': 'Downsloping',
};
const thalMap = {
  '1': 'Normal',
  '2': 'Fixed Defect',
  '3': 'Reversible Defect',
};

export default function PredictionResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};
  console.log('PredictionResult data:', data); // Debug log
  const probability = data.probability ?? null;
  const prediction = data.prediction ?? null;

  // Patient data
  const age = data.age;
  const chol = data.chol;
  const trestbps = data.trestbps;
  const sex = sexMap[data.sex];
  const cp = cpMap[data.cp];
  const fbs = fbsMap[data.fbs];
  const restecg = restecgMap[data.restecg];
  const thalach = data.thalach;
  const exang = exangMap[data.exang];
  const oldpeak = data.oldpeak;
  const slope = slopeMap[data.slope];
  const ca = data.ca;
  const thal = thalMap[data.thal];

  if (probability === null || prediction === null) {
    return (
      <div className="prediction-root">
        <div className="layout-container">
          <header className="prediction-header">
            <div className="prediction-header-title">
              <div className="size-4">{/* SVG logo here if needed */}</div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Health Insights</h2>
            </div>
          </header>
          <div className="prediction-content">
            <div className="layout-content-container">
              <div className="prediction-title">
                <p className="prediction-title-text">No prediction data available.</p>
                <p className="prediction-description">Please submit the patient data form first.</p>
                <Link to="/patient" className="prediction-header-link" style={{marginTop: '1rem'}}>Go to Patient Data Form</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prediction-root">
      <div className="layout-container">
        <header className="prediction-header">
          <div className="prediction-header-title">
            <div className="size-4">{/* SVG logo here if needed */}</div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Health Insights</h2>
          </div>
          <div className="prediction-header-nav">
            <div className="prediction-header-links">
              <Link className="prediction-header-link" to="#">Overview</Link>
              <Link className="prediction-header-link" to="/">Dashboard</Link>
            
              <Link className="prediction-header-link" to="#">Patients</Link>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                {/* Bell SVG here if needed */}
              </div>
            </button>
          </div>
        </header>
        <div className="prediction-content">
          <div className="layout-content-container">
            <div className="prediction-title">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="prediction-title-text">Heart Disease Risk Assessment</p>
                <p className="prediction-patient">Patient: {sex || '-'}, Age: {age || '-'}</p>
              </div>
            </div>
            <div className="prediction-risk">
              <div className="prediction-risk-row">
                <p className="prediction-risk-label">Risk Score</p>
                <p className="prediction-risk-value">{probability !== null ? `${(probability * 100).toFixed(1)}%` : 'N/A'}</p>
              </div>
              <div className="prediction-bar-bg">
                <div className="prediction-bar" style={{ width: probability !== null ? `${(probability * 100).toFixed(1)}%` : '0%' }}></div>
              </div>
              <p className="prediction-risk-status">
                {prediction !== null ? (prediction === 1 ? 'High Risk' : 'Low Risk') : 'No prediction available.'}
              </p>
            </div>
            <div className="prediction-factors">
              <h2 className="prediction-factors-title">Key Factors Influencing Risk</h2>
              <div className="prediction-factors-grid">
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Age</p>
                  <p className="prediction-factor-value">{age ? `${age} years` : '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Cholesterol Level</p>
                  <p className="prediction-factor-value">{chol ? `${chol} mg/dL` : '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Blood Pressure</p>
                  <p className="prediction-factor-value">{trestbps ? `${trestbps} mmHg` : '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Chest Pain Type</p>
                  <p className="prediction-factor-value">{cp || '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Fasting Blood Sugar</p>
                  <p className="prediction-factor-value">{fbs || '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Number of Major Vessels (ca)</p>
                  <p className="prediction-factor-value">{ca !== undefined ? ca : '-'}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="prediction-factor-label">Thalassemia (thal)</p>
                  <p className="prediction-factor-value">{thal || '-'}</p>
                </div>
              </div>
            </div>
            <p className="prediction-description">
              This assessment is based on the provided patient data. Key factors such as age, cholesterol, blood pressure, chest pain type, and fasting blood sugar contribute to the risk score. Further consultation with a healthcare professional is recommended for personalized advice and management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
