from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import pandas as pd  # Import pandas

# Load model and scaler
model = joblib.load('house_price_model.pkl')
scaler = joblib.load('scaler.pkl')

app = Flask(__name__)
CORS(app)

# Define simplified house features
FEATURES = ['area', 'bedrooms', 'bathrooms', 'mainroad', 'basement', 'parking', 'furnishingstatus']

# create the endpoint where the front-end will send the user input data and it will use the trained model to predict
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Ensure the input follows the correct feature order
        input_df = pd.DataFrame([data], columns=FEATURES)  # Create DataFrame with feature names
        
        # Scale input data
        input_scaled = scaler.transform(input_df)
        prediction = model.predict(input_scaled)[0]

        return jsonify({'predicted_price': round(prediction, 2)})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
