import React, { useState, useEffect } from 'react';

const DentalMeasurements = ({ servicesManager }) => {
  if (!servicesManager) return <div>Loading services...</div>;

  const [measurements, setMeasurements] = useState([]);

  const saveMeasurements = async data => {
    try {
      await fetch('http://localhost:5000/api/save-measurements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer my-secret-token',
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error('Error saving measurements:', err);
    }
  };

  const loadMeasurements = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/load-measurements', {
        headers: { Authorization: 'Bearer my-secret-token' },
      });
      const data = await res.json();
      setMeasurements(data);
    } catch (err) {
      console.error('Error loading measurements:', err);
    }
  };

  useEffect(() => {
    loadMeasurements();
  }, []);

  const addMeasurement = type => {
    const value = Math.random() * 10;
    const newMeasurements = [...measurements, { type, value: value.toFixed(2) }];
    setMeasurements(newMeasurements);
    saveMeasurements(newMeasurements);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(measurements, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dental-measurements.json';
    link.click();
  };

  return (
    <div style={{ padding: 10, borderTop: '1px solid #ccc', backgroundColor: '#eee' }}>
      <h3>Dental Measurements</h3>

      <div style={{ marginBottom: 10 }}>
        {['PA length', 'Canal angle', 'Crown width', 'Root length'].map(label => (
          <button
            key={label}
            onClick={() => addMeasurement(label)}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '6px 12px',
              marginRight: 8,
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <ul>
        {measurements.map((m, i) => (
          <li key={i}>
            {m.type}: {m.value}
          </li>
        ))}
      </ul>

      <button
        onClick={exportJSON}
        style={{
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '6px 12px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Export JSON
      </button>
    </div>
  );
};

export default DentalMeasurements;
