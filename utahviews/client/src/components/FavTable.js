import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import FavCard from './FavCard';
// import CityList from './CityList';


const Table = (props) => {
    return (
        <div className="container">
        <FavCard favorites={props.cities} handleChange={props.handleChange} />
            <div className="row">
                <table className='table'>
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {props.trails.map((trail) => <TableBody key={trail.id} {...trail} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;   