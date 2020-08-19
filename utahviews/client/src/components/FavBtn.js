import React from 'react';
// import "../styles/FavBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavBtn(props) {
    
    return (
        <span className="fav-icon" {...props} role="icon" tabIndex="0">
            <i className="far fa-heart fa-1x"></i>
        </span>
    );
}

export default FavBtn;
