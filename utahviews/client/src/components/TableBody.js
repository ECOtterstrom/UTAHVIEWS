import React from 'react';

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
            {/* <td>{props.picture.thumbnail}</td> */}
            <td><img src={props.imgSqSmall} alt={'profile pic'} /></td>
        </tr>

    )
}

export default TableBody;