import React from 'react';

const TableBody = (props) => {
    
    return (
    
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.summary}</td>
            <td>{props.difficulty}</td>
            <td>{props.length}</td>
            {/* <td>{props.picture.thumbnail}</td> */}
            <td><img src={props.imgSqSmall} alt={'profile pic'} /></td>
        </tr>

    )
}

export default TableBody;