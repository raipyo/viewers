// DentalMeasurements.tsx
import React, { useState, useEffect } from 'react';

const DentalMeasurements = ({ servicesManager }) => {
  // Safety check
  if (!servicesManager) return <div>Loading services...</div>;

  const [measurements, setMeasurements] = useState([]);

  // --- Backend API functions ---
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

  // --- Load measurements on mount ---
  useEffect(() => {
    loadMeasurements();
  }, []);

  // --- Add new measurement ---
  const addMeasurement = type => {
    const value = Math.random() * 10; // Replace with actual OHIF tool value
    const newMeasurements = [...measurements, { type, value: value.toFixed(2) }];
    setMeasurements(newMeasurements);
    saveMeasurements(newMeasurements); // Save immediately after change
  };

  // --- Export JSON locally ---
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
        <button onClick={() => addMeasurement('PA length')}>PA length</button>
        <button onClick={() => addMeasurement('Canal angle')}>Canal angle</button>
        <button onClick={() => addMeasurement('Crown width')}>Crown width</button>
        <button onClick={() => addMeasurement('Root length')}>Root length</button>
      </div>

      <ul>
        {measurements.map((m, i) => (
          <li key={i}>
            {m.type}: {m.value}
          </li>
        ))}
      </ul>

      <button onClick={exportJSON}>Export JSON</button>
    </div>
  );
};

export default DentalMeasurements;
