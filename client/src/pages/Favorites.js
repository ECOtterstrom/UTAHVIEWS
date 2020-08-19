import React, { useEffect, useState } from 'react';
import '../App.css';
import FavCard from '../components/FavCard';
import { UserService } from '../utils/API';
import { userState } from '../utils/UserAtom';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router-dom';

function Favorites() {

  const [trails, setTrails] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    UserService.populateFavorites(user._id).then(data => setFavorites(data.favorites));
  }, [])

  useEffect(() => console.log(trails), [trails])
  useEffect(() => console.log(favorites), [favorites])


  return !user ? <Redirect to={"/login"} /> : (
    <>
      <div className="container">
        <h1>{user.name}</h1>
        <div class="card-deck col-12">
          {favorites && favorites ? favorites.map(x => <FavCard {...x} />) : <h1>No current favorites have been selected.</h1>}
        </div>
      </div>
    </>
  );
}

export default Favorites;