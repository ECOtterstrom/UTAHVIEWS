import React, { useState } from 'react';
import { UserService } from '../utils/API';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FavCard = (props) => {


    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>

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