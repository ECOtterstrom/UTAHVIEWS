import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';


const Table = (props) => {

    return (
        <table>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {props.trails.map((trail) => <TableBody key={trail.id} {...trail} />)} 
            </tbody>
        </table>
    )
}

export default Table;   