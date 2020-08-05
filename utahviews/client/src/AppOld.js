import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
//import SignUp from '../src/components/SignUp';
import API from './utils/API';

function App() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    loadTrails()
  }, [])

  function loadTrails() {
    API.getTrails()
    .then((res) => 
      setTrails(res.data)
      )
      .catch(err => console.log(err));
    //API.getTrails().then((trails) => setTrails(trails.data.trails))
  };

  useEffect(() => console.log(trails), [trails])

  return (
    <div>
      <Table trails={trails} />
    </div>
  );
}

export default App;