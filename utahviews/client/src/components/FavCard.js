import React, { useState } from 'react';
import FavBtn2 from './FavBtn2';
import { UserService } from '../utils/API';
import '../styles/FavCard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FavCard = (props) => {


    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src={props.imgMedium} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Trail: {props.name}</h5>
                    <p class="card-text">{props.summary}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Location: {props.location}</li>
                    <li class="list-group-item">Difficulty: {props.difficulty}</li>
                    <li class="list-group-item">Length: {props.length}</li>
                    <li class="list-group-item">Ascent: {props.ascent}</li>
                    <li class="list-group-item">Hiker Rating: {props.stars}</li>
                    <li class="list-group-item">Hiker Votes: {props.starVotes}</li>
                </ul>
                <div class="card-body">
                    <a className="fav-icon"><FavBtn2 /></a>
                </div>
            </div>
        </>
    );
}

{/* <td>{props.name}</td>
<td>{props.location}</td>
<td>{props.summary}</td>
<td>{props.difficulty}</td>
<td>{props.length}</td>
<td>{props.ascent}</td>
<td>{props.stars}</td>
<td>{props.starVotes}</td>
<td><img src={props.imgSqSmall} alt={'profile pic'} /></td>
<td className="fav-icon"><FavBtn /></td> */}

export default FavCard;   