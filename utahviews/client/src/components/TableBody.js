import React, { useEffect, useState } from 'react';
import FavBtn from '../components/FavBtn'
import FavBtn2 from '../components/FavBtn2'
import '../styles/FavBtn.css'
import { trailService, UserService } from '../utils/API';
import { userState } from '../utils/UserAtom';
import { useRecoilState } from 'recoil';

const TableBody = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [user, setUser] = useRecoilState(userState);

    const handleClick = (event) => {
       isFavorite ? setIsFavorite(false):setIsFavorite(true);
       trailService.create({...props, userId: user._id }).then(data => console.log(data));
    }

    return (
    
        <tr>
            <td>{props.name}</td>
            <td>{props.location}</td>
            <td>{props.summary}</td>
            <td>{props.difficulty}</td>
            <td>{props.length}</td>
            <td>{props.ascent}</td>
            <td>{props.stars}</td>
            <td>{props.starVotes}</td>
            <td><img src={props.imgSqSmall} alt={'profile pic'} /></td>
            {user && <td onClick={handleClick}>{isFavorite ? <FavBtn2 />:<FavBtn/>}</td>}
        </tr>

    )
}

export default TableBody;
