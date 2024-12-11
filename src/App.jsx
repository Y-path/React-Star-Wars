// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { useEffect, useState } from 'react';
import { getAllStarships } from './api'; 

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  


