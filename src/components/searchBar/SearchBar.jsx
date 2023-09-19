import React, { useState } from 'react';

function ZipCodeSearch({ onSearch }) {
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    // Pass the zip code to the parent 
    onSearch(zipCode);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ZipCodeSearch;