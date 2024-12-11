

import './App.css'

import { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api'; 
import StarShipCard from './components/StarShipCard';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStarships()
  })

  
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