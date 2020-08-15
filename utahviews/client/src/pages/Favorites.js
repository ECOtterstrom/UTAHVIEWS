import React, { useEffect, useState } from 'react';
import '../App.css';
import FavTable from '../components/FavTable';
import API, { UserService } from '../utils/API';

function Favorites() {

    const [trails, setTrails] = useState([]);
    const [favorites, setFavorites] = useState([])
    // const [favoriteOptions, setFavoriteOptions] = useState({
    //   username: "",
    //   id: ""
    // });
  
    useEffect(() => {
      UserService.getUser().then(res => UserService.populateFavorites(res.data._id).then(data => setFavorites(data)))
    }, [])

    useEffect(() => console.log(favorites), [favorites])
    useEffect(() => console.log(trails), [trails])
  
    return (
      <>
        <div className="container">
          {/* <h1>{User.name}</h1> */}
          {/* {favorites.map(x => <FavCard {...x} />)} */}
        </div>
      </>
    );
  
    
  }
  
  export default Favorites;