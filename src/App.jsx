import './App.css'

import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './components/StarShipCard';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();

        setStarships(data);

      } catch (error) {
        console.error('Error fetching starships:', error);

      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className='App'>
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