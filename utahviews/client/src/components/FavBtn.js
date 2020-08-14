import React from "react";
import "../styles/FavBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavBtn(props) {
    return (
        <span className="fav-btn" {...props} role="button" tabIndex="0" text-align="center">
            <i className="far fa-heart fa-1x"></i>
        </span>
    );
}

export default FavBtn;

{/* <i class="fas fa-heart"></i> "solid heart" */ }
{/* <i class="far fa-heart"></i> "outline heart" */ }
// ✗

