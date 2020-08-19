import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CityList = (props) => {
    return (
        <div className="card-body">
            <b className="utahcities">Utah Cities</b>
            <select onChange={props.handleChange}>
                {props.cities.map(x => <option value={x.city} key={x._id}>{x.city}</option>)}
            </select>
            <a>{props.value}</a>
        </div>
    );
}

export default CityList;   