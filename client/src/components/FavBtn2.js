import React from 'react';
//import "../styles/FavBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function FavBtn2(props) {
    
    return (
        <span className="fav-btn" {...props} role="icon" tabIndex="0">
            <i className="fas fa-heart fa-1x"></i>
        </span>
    );
}

export default FavBtn2;
