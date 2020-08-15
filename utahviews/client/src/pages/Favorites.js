import React, { useEffect, useState } from 'react';
import '../App.css';
import FavTable from '../components/FavTable';
import API from '../utils/API';

function Favorites() {

    const [trails, setTrails] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [favoriteOptions, setFavoriteOptions] = useState({
      username: "",
      id: ""
    });
  
  
    useEffect(() => {
      loadTrails()
    }, [favoriteOptions])
  
    // useEffect(() => {
    //   loadFavorites()
    // }, [])
  
    function loadTrails() {
      API.getTrails(favoriteOptions)
        .then((res) =>
          setTrails(res.data.trails)
        )
        .catch(err => console.log(err));
      //API.getTrails().then((trails) => setTrails(trails.data.trails))
    };
  
    // function loadFavorites() {
    //   API.getFavorites(favoriteOptions)
    //     .then((res) =>
    //       setFavorites(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // //searches for employees based on last name
    // const handleChange = (event) => {
    //   //updates filteredFavorites array
    //   const filter = event.target.value.toLowerCase()
    //   console.log(filter);
    //   const result = favorites.filter(favorite => favorite.favorite.toLowerCase().includes(filter))
    //   console.log(result[0]);
    //   setFavoriteOptions(result[0]);
    // }
  
  
    // useEffect(() => console.log(trails), [trails])
    // useEffect(() => console.log(favorites), [favorites])
  
    return (
      <>
        <div className="container">
          {/* <FavTable trails={trails} favorites={favorites} handleChange={handleChange} /> */}
        </div>
      </>
    );
  
    
  }
  
  export default Favorites;