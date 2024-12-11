

import './App.css'

import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api'; 
import StarShipCard from './components/StarShipCard';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStarships()
    .then(data => {
      setStarships(data);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
}, []);

if (loading) {
  return <div>Loading...</div>;
}


  
return (
  <div>
    <h1>Starships</h1>
    <div className='cards'>
      {starships.map((starship, index) => (
        <StarShipCard key={index} starship={starship} />
      ))}
      </div> 
  </div>
);
}

export default App;