import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler, LabelEncoder
import joblib

# Load dataset
df = pd.read_csv('dataset/Housing.csv')

# Encode categorical features
categorical_features = ['mainroad', 'basement', 'furnishingstatus']  # Removed unnecessary features
for col in categorical_features:
    df[col] = LabelEncoder().fit_transform(df[col])

# Select relevant features and target
features = ['area', 'bedrooms', 'bathrooms', 'mainroad', 'basement', 'parking', 'furnishingstatus']  # Simplified features
X = df[features]
y = df['price']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model using Linear Regression
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Save model and scaler
joblib.dump(model, 'house_price_model.pkl')
joblib.dump(scaler, 'scaler.pkl')

print("✅ Model and scaler saved!")
