import React from 'react';

const InputField = (props) => {

    return (

        <div>
            <b>Utah Cities:</b> <input type='search' onChange={props.handleChange}></input>
            <p>Select a city to display nearby trails.</p>
        </div>
    )
}

export default InputField;  