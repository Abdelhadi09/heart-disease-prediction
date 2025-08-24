import pickle
import joblib
import numpy as np
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Load the model once at startup
with open('heart_model_final1.pkl', 'rb') as f:
    model = joblib.load(f)
print("Model expects", model.n_features_in_, "features")
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/patient_data')
def patient_data():
    return render_template('patient_data.html')

@app.route('/prediction_result', methods=['GET', 'POST'])
def prediction_result():
    if request.method == 'POST':
        # Extract form data
        features = [
            float(request.form['age']),
            float(request.form['sex']),
            float(request.form['cp']),
            float(request.form['trestbps']),
            float(request.form['chol']),
            float(request.form['fbs']),
            float(request.form['restecg']),
            float(request.form['thalach']),
            float(request.form['exang']),
            float(request.form['oldpeak']),
            float(request.form['slope']),
            float(request.form['ca']),      # Added ca
            float(request.form['thal'])     # Added thal
        ]
        X = np.array([features])
        # Predict probability
        prob = model.predict_proba(X)[0][1]
        prediction = model.predict(X)[0]
        return render_template('prediction_result.html', probability=prob, prediction=prediction)
    return render_template('prediction_result.html', probability=None, prediction=None)

@app.route('/api/prediction_result', methods=['POST'])
def api_prediction_result():
    data = request.get_json()
    print('Received data:', data)  # Debug log
    required_fields = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
    missing = [field for field in required_fields if field not in data or data[field] == '']
    if missing:
        print('Missing or empty fields:', missing)
        return jsonify({'error': f'Missing or empty fields: {missing}'}), 400
    try:
        features = [
            float(data['age']),
            float(data['sex']),
            float(data['cp']),
            float(data['trestbps']),
            float(data['chol']),
            float(data['fbs']),
            float(data['restecg']),
            float(data['thalach']),
            float(data['exang']),
            float(data['oldpeak']),
            float(data['slope']),
            float(data['ca']),
            float(data['thal'])
        ]
        print('Features for model:', features)
        X = np.array([features])
        prob = model.predict_proba(X)[0][1]
        prediction = int(model.predict(X)[0])
        print(f"Prediction: {prediction}, Probability: {prob}")
        return jsonify({'probability': prob, 'prediction': prediction})
    except Exception as e:
        print('Exception:', str(e))
        return jsonify({'error': str(e)}), 500

@app.route('/model_insights')
def model_insights():
    return render_template('model_insights.html')

if __name__ == '__main__':
    app.run(debug=True)
