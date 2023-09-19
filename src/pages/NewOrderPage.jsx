import React, { useState } from 'react';
import { fetchCatsByZipCode } from '../utilities/petfinder-api';
import {  useNavigate } from 'react-router-dom';
import './NewOrderPage.css'; 


function NewOrderPage(props) {
  const [zipCode, setZipCode] = useState('');
  const [ setCats] = useState([]);
  const [error, setError] = useState('');
  const [likedCats, setLikedCats] = useState([]);

//to navigate to another page 
const history = useNavigate(); 

  async function handleSearch() {
    try {
      const data = await fetchCatsByZipCode(zipCode);
      if (!data || !data.animals) {
        setError('Unexpected response structure.');
        return;
      }
      setCats(data.animals);
    } catch (err) {
      setError(`Failed to fetch cats: ${err.message}`);
    }
  }

  //to handle like
  function likeCat(cat) {
    setLikedCats(prevCats => [...prevCats, cat]);
  }

  return (
    <div className="center-container"> 
      <input
        value={zipCode}
        onChange={e => setZipCode(e.target.value)}
        style={{textAlign: 'center'}}
        placeholder="Enter Zip Code"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
   
      <ul>
      {Array.isArray(likedCats) && likedCats.map((cat, index) => (
          <li key={cat.id}>{cat.name}
          <button onClick={() => likeCat(cat)}>Like</button>
          </li>
        ))}
      </ul>
        {/*navigate to OrderHistoryPage */}
        <button onClick={() => history.push('/liked-cats')}>View Liked Cats</button>
    </div>
  );
}

export default NewOrderPage;