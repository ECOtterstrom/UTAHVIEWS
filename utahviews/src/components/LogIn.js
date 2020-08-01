import React from "react";

let Users = [
    {
        username: "test",
        password: "test"
    },
    {
        username: "test2",
        password: "test2"
    }
]
function GetInfo () {
    let username = "test";
    let password = "test";

    for(i = 0; i < Users.length; i++) {
        if(username === Users.value && password === Users.value) {
            console.log(username + "is logged in!");
        }
    } 
}

export default GetInfo;