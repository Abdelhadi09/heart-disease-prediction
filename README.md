# Heart Disease Prediction Web App

This is a full-stack web application that predicts the likelihood of heart disease based on user-provided patient data. The frontend is built with React and Material-UI, and the backend is a Flask server that uses a machine learning model to make predictions.

## Features

- **Modern, Responsive UI**: Built with React and Material-UI for a clean and intuitive user experience.
- **Patient Data Input**: A user-friendly form for entering patient health data.
- **Heart Disease Prediction**: Utilizes a machine learning model to predict the probability of heart disease.
- **Dynamic Results Display**: Shows the prediction results, including a risk score and level, in a clear and understandable format.
- **Model Insights**: Provides information about the machine learning model, its development, and its performance.

## Tech Stack

- **Frontend**: React, Material-UI, React Router
- **Backend**: Flask, scikit-learn, pandas
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js and npm
- Python and pip

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abdelhadi09/heart-disease-detector.git
   cd heart-disease-prediction
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Flask backend:**

   ```bash
   python app.py
   ```

2. **Start the React frontend:**

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the address provided by Vite).

## Project Structure

- `src/`: Contains the React frontend code.
  - `components/`: Reusable React components.
  - `pages/`: The main pages of the application.
  - `App.jsx`: The main App component with routing.
  - `main.jsx`: The entry point of the React application.
- `app.py`: The Flask backend server.
- `heart_model_final1.pkl`: The trained machine learning model.
- `requirements.txt`: The Python dependencies for the backend.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

