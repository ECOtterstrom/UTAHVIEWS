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

  useEffect(() => populateTrails(), [])

  async function populateTrails() {
    const { data} = await UserService.populateFavorites();
    setFavorites(data)
  }
  useEffect(() => console.log(trails), [trails])
  useEffect(() => console.log(favorites), [favorites])


  return (
    <>
      <div className="container">
        <h1>{user.name}</h1>
        {favorites.map(x => <FavCard {...x} />)}
      </div>
    </>
  );
}

export default Favorites;