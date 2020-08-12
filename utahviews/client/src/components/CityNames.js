import React from 'react';

const CityNames = (props) => {
    
    return (
    
        <tr>
            <td>{props.city}</td>
            <td>{props.latitude}</td>
            <td>{props.longitude}</td>
        </tr>

    )
}

export default CityNames;