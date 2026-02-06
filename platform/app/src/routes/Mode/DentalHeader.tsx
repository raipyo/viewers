import React, { useState } from 'react';

const DentalHeader = () => {
  const [selectedTooth, setSelectedTooth] = useState('');

  return (
    <div
      style={{
        padding: '10px 20px',
        backgroundColor: '#004c6d',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <strong>Practice:</strong> Smile Dental Clinic
      </div>
      <div>
        <strong>Patient:</strong> John Doe
      </div>
      <div>
        <label>
          Tooth:
          <select
            value={selectedTooth}
            onChange={e => setSelectedTooth(e.target.value)}
          >
            <option value="">Select</option>
            {/* FDI / Universal numbering */}
            {Array.from({ length: 32 }, (_, i) => (
              <option
                key={i}
                value={i + 1}
              >
                {i + 1}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default DentalHeader;
