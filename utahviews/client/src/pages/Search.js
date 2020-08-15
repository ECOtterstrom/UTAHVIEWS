import React, { useEffect, useState } from 'react';
import '../App.css';
import Table from '../components/Table';
import InputField from '../components/InputField';
import API from '../utils/API';

function App() {

  
  const [trails, setTrails] = useState([])
  const [options, setOptions] = useState({
    lat: '',
    lon: '',
    distance: ''
  });
  const [cities, setCities] = useState([])
  const [cityOptions, setCityOptions] = useState({
    city: '',
    latitude: '',
    longitude: ''
  });


  useEffect(() => {
    loadTrails()
  }, [])

  useEffect(() => {
    loadCities()
  }, [])

  function loadTrails() {
    API.getTrails(options)
    .then((res) => 
      setTrails(res.data.trails)
      )
      .catch(err => console.log(err));
    //API.getTrails().then((trails) => setTrails(trails.data.trails))
  };

  function loadCities() {
    API.getCities(cityOptions)
    .then((res) => 
      setCities(res.data.cities)
      )
      .catch(err => console.log(err));
  };

  useEffect(() => console.log(trails), [trails])
  useEffect(() => console.log(cities), [cities])

  return (
    <div>
      <Table trails={trails} />
    </div>
  );

}

export default App;