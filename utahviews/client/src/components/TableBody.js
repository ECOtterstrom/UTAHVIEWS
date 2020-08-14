import React from 'react';
import FavBtn from '../components/FavBtn'

const TableBody = (props) => {
    
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
            <td className="fav-icon"><FavBtn /></td>
        </tr>

    )
}

export default TableBody;