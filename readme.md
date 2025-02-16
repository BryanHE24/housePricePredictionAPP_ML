# House Price Prediction Web App

This project provides a web-based application that predicts the price of a house based on various features such as area, number of bedrooms, bathrooms, parking spaces. Using this dataset from kaggle: https://www.kaggle.com/datasets/yasserh/housing-prices-dataset It uses a trained machine learning model deployed via a Flask backend and a React front-end interface.

## Features
* Predict house prices based on user input.
* Trained model using house features such as area, bedrooms, bathrooms, parking, basement, and furnishing status.
* Simple form for users to input data and get predictions.
* Display of the predicted house price in a user-friendly interface.

## Tech Stack
* **Backend**: Flask, Flask-CORS, joblib, scikit-learn
* **Frontend**: React, Axios
* **Machine Learning Model**: Linear Regression

## Prerequisites
Make sure you have the following installed:
* Python 3.8+
* Node.js and npm
* Flask
* React
* Required Python libraries (listed in requirements.txt)

## Installation

### Backend Setup
1. Clone the repository:

```bash
git clone https://github.com/BryanHE24/housePricePredictionAPP_ML.git
cd housePricePredictionAPP_ML
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install required Python dependencies:

```bash
pip install -r requirements.txt
```

4. Run the Flask backend:

```bash
python app.py
```
This will start the Flask server on `http://127.0.0.1:5000`.

### Frontend Setup
1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install required npm dependencies:

```bash
npm install
```

3. Start the React application:

```bash
npm start
```
This will start the React app on `http://localhost:3000`.

## Model and Scaler
The machine learning model (`house_price_model.pkl`) and scaler (`scaler.pkl`) are pre-trained and saved using the `joblib` library. These files are used by the Flask backend to make predictions.

To retrain the model:
1. Ensure you have the dataset `dataset/Housing.csv` in the correct location.
2. Run the model training script:

```bash
python model_training.py
```

3. The script will save the model and scaler files (`house_price_model.pkl` and `scaler.pkl`), which are then used by the Flask app.

## How to Use
1. Open the frontend in your browser at `http://localhost:3000`.
2. Enter the house details in the form, such as area, number of bedrooms, bathrooms, parking spaces, basement, and furnishing status.
3. Click the "🔮 Get Prediction" button to see the estimated house price.
4. The backend will process the input and return the predicted price.

## Directory Structure

```
/house-price-prediction
│
├── backend/                # Flask backend
│   ├── app.py              # Main Flask app
│   ├── model_evaluation.py # Model evaluation script
│   └── model_training.py   # Model training script
│
├── dataset/                # Dataset directory
│   └── Housing.csv         # Housing dataset
│
├── frontend/               # React frontend
│   ├── src/                # Source code for React
│   ├── public/             # Public assets
│   └── package.json        # NPM configuration
│
├── house_price_model.pkl   # Pre-trained model
└── scaler.pkl              # Scaler used for prediction
```

## Model Evaluation
The model is evaluated using the following metrics:
* **Mean Absolute Error (MAE)**
* **Mean Squared Error (MSE)**
* **Root Mean Squared Error (RMSE)**
* **R² Score** (expressed as a percentage)

These metrics are calculated in the `model_evaluation.py` script.

## License
This project is licensed under the MIT License.

## Image
![Screenshot from 2025-02-15 18-44-06](https://github.com/user-attachments/assets/9d554407-707d-4819-87fa-4ddc1e513f91)

