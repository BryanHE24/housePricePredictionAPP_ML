import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    mainroad: "0", // Default value as No
    basement: "0", // Default value as No
    furnishingstatus: "0", // Default value as Unfurnished
  });
  
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData) // verify that all the data is correctly formatted

    // Simple validation
    if (!formData.area || !formData.bedrooms || !formData.bathrooms || !formData.parking) {
      setError("❌ Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setPrediction(response.data.predicted_price);
    } catch (err) {
      setError("⚠️ Error making prediction. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>🏡 House Price Prediction</h2>
      <p>Enter the details below to estimate the house price.</p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="form-grid">
        <input type="number" name="area" placeholder="🏠 Area (sq ft)" onChange={handleChange} required />
        <input type="number" name="bedrooms" placeholder="🛏️ Bedrooms" onChange={handleChange} required />
        <input type="number" name="bathrooms" placeholder="🛁 Bathrooms" onChange={handleChange} required />
        <input type="number" name="parking" placeholder="🚗 Parking Spots" onChange={handleChange} required />

        <label>Basement</label>
        <select name="basement" onChange={handleChange}>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>

        <label>Main Road</label>
        <select name="mainroad" onChange={handleChange}>
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>

        <label>Furnishing Status</label>
        <select name="furnishingstatus" onChange={handleChange}>
          <option value="0">Unfurnished</option>
          <option value="1">Semi-Furnished</option>
          <option value="2">Furnished</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "🔮 Get Prediction"}
        </button>
      </form>

      {prediction !== null && (
  <div className="prediction-box">
    <h3>🏡 Estimated Price:</h3>
    <p>${new Intl.NumberFormat().format(prediction.toFixed(2))}</p>
  </div>
)}

    </div>
  );
}

export default App;
