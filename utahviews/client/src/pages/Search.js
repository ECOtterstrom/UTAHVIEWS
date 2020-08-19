import React, { useEffect, useState } from 'react';
import '../App.css';
import Table from '../components/Table';
import API from '../utils/API';
//import FavBtn from '../components/FavBtn';
import CityList from '../components/CityList';
import { CityState } from '../utils/CityAtom';
import { useRecoilState } from 'recoil';

function App() {

  const [trails, setTrails] = useState([]);
  const [cities, setCities] = useState([])
  const [cityOptions, setCityOptions] = useRecoilState(CityState);
  // const [favorite, setFavorite] = useState({
  //   username: "",
  //   id: "",
  // });

  useEffect(() => {
    loadTrails()
  }, [cityOptions])

  useEffect(() => {
    loadCities()
  }, [])

  function loadTrails() {
    API.getTrails(cityOptions)
      .then((res) =>
        setTrails(res.data.trails)
      )
      .catch(err => console.log(err));
    //API.getTrails().then((trails) => setTrails(trails.data.trails))
  };

  function loadCities() {
    API.getCities(cityOptions)
      .then((res) =>
        setCities(res.data)
      )
      .catch(err => console.log(err));
  };

  //searches for employees based on last name
  const handleChange = (event) => {
    //updates filteredCities array
    const filter = event.target.value.toLowerCase()
    console.log(filter);
    const result = cities.filter(city => city.city.toLowerCase().includes(filter))
    console.log(result[0]);
    setCityOptions(result[0]);
  }


  useEffect(() => console.log(trails), [trails])
  useEffect(() => console.log(cities), [cities])

  return (
    <>
      <div className="container">
        <CityList cities={cities} handleChange={handleChange} />
        <Table trails={trails} cities={cities} handleChange={handleChange}/>
      </div>
    </>
  );

}

export default App;