import React, {useEffect, useState} from 'react';
import './App.css';
import Table from './components/Table';
import SignUp from '../src/components/SignUp';
import API from './utils/API';

function App() {
  const [trails, setTrails] = useState([]);

  useEffect( () => {
    API.getTrails().then((trails) => setTrails(trails))
  }, []);

  useEffect(() => console.log(trails), [trails])

  return (
      <Table trails = {trails} />
  );
}

export default App;