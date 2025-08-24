import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PatientData from './PatientData';
import PredictionResult from './PredictionResult';
import ModelInsights from './ModelInsights';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<PatientData />} />
        <Route path="/result" element={<PredictionResult />} />
        <Route path="/insights" element={<ModelInsights />} />
      </Routes>
    </Router>
  );
}

export default App;
