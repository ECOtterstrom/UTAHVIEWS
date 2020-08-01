import React from 'react';
import TableHead from './TableHead';
//import TableBody from './TableBody';


const Table = (props) => {

    return (
        <table>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {props.trails.map(trail => 
                <tr>
                    <td>{trail.name}</td>
                    <td>{trail.type}</td>
                    <td>{trail.summary}</td>
                    <td>{trail.difficulty}</td>
                    <td>{trail.length}</td>
                    {/* <td>{props.picture.thumbnail}</td> */}
                    <td><img src={trail.imgSqSmall} alt="trail pic"/></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Table;   