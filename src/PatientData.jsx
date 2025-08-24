import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PatientData.css';

export default function PatientData() {
  const [form, setForm] = useState({
    age: '', sex: '', cp: '', trestbps: '', chol: '', fbs: '', restecg: '', thalach: '', exang: '', oldpeak: '', slope: '', ca: '', thal: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/prediction_result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Prediction failed');
      const data = await res.json();
      // Pass both prediction result and patient data to the result page
      navigate('/result', { state: { ...data, ...form } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="patientdata-root">
      <div className="layout-container">
        <header className="patientdata-header">
          <div className="patientdata-header-title">
            <div className="size-4">{/* SVG logo here if needed */}</div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Health Insights</h2>
          </div>
          <div className="patientdata-header-nav">
            <div className="patientdata-header-links">
              <Link className="patientdata-header-link" to="/">Dashboard</Link>
            </div>
          </div>
        </header>
        <div className="patientdata-content">
          <div className="layout-content-container">
            <div className="patientdata-title"><p className="patientdata-title-text">Patient Data Input</p></div>
            <form onSubmit={handleSubmit} className="patientdata-form">
              {/* All input fields, matching the original HTML, using value and onChange */}
              <label className="patientdata-label">
                <p className="patientdata-label-text">Age</p>
                <input name="age" type="number" placeholder="Enter patient's age" className="patientdata-input" required value={form.age} onChange={handleChange} />
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Sex</p>
                <select name="sex" className="patientdata-select" required value={form.sex} onChange={handleChange}>
                  <option value="">Select patient's sex</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Chest Pain Type</p>
                <select name="cp" className="patientdata-select" required value={form.cp} onChange={handleChange}>
                  <option value="">Select chest pain type</option>
                  <option value="0">Typical Angina</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non-anginal Pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Resting Blood Pressure</p>
                <input name="trestbps" type="number" placeholder="Enter resting blood pressure (mmHg)" className="patientdata-input" required value={form.trestbps} onChange={handleChange} />
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Serum Cholesterol</p>
                <input name="chol" type="number" placeholder="Enter serum cholesterol (mg/dl)" className="patientdata-input" required value={form.chol} onChange={handleChange} />
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Fasting Blood Sugar</p>
                <select name="fbs" className="patientdata-select" required value={form.fbs} onChange={handleChange}>
                  <option value="">Select fasting blood sugar</option>
                  <option value="1">&gt; 120 mg/dl</option>
                  <option value="0">&le; 120 mg/dl</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Resting Electrocardiographic Results</p>
                <select name="restecg" className="patientdata-select" required value={form.restecg} onChange={handleChange}>
                  <option value="">Select resting ECG results</option>
                  <option value="0">Normal</option>
                  <option value="1">Having ST-T wave abnormality</option>
                  <option value="2">Showing probable or definite left ventricular hypertrophy</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Maximum Heart Rate Achieved</p>
                <input name="thalach" type="number" placeholder="Enter maximum heart rate" className="patientdata-input" required value={form.thalach} onChange={handleChange} />
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Exercise Induced Angina</p>
                <select name="exang" className="patientdata-select" required value={form.exang} onChange={handleChange}>
                  <option value="">Select exercise induced angina</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">ST Depression Induced by Exercise</p>
                <input name="oldpeak" type="number" step="any" placeholder="Enter ST depression value" className="patientdata-input" required value={form.oldpeak} onChange={handleChange} />
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Slope of the Peak Exercise ST Segment</p>
                <select name="slope" className="patientdata-select" required value={form.slope} onChange={handleChange}>
                  <option value="">Select ST segment slope</option>
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Number of Major Vessels Colored (ca)</p>
                <select name="ca" className="patientdata-select" required value={form.ca} onChange={handleChange}>
                  <option value="">Select number of vessels</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <label className="patientdata-label">
                <p className="patientdata-label-text">Thalassemia (thal)</p>
                <select name="thal" className="patientdata-select" required value={form.thal} onChange={handleChange}>
                  <option value="">Select thalassemia type</option>
                  <option value="1">Normal</option>
                  <option value="2">Fixed Defect</option>
                  <option value="3">Reversible Defect</option>
                </select>
              </label>
              <div id='btn' className="col-span-2 flex justify-end">
                <button id="predict-button" type="submit" className="patientdata-predict-btn">
                  <span className="truncate">Predict</span>
                </button>
              </div>
              {error && <div className="patientdata-form-error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
