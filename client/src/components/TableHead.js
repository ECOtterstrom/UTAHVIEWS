import React from "react";


const TableHead = () => {
    return (
            <tr>
                {/* <th>onClick={() =><Button>Last Name</Button>}</th> */}
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Summary</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Length</th>
                <th scope="col">Ascent</th>
                <th scope="col">Hiker Rating</th>
                <th scope="col">Hiker Votes</th>
                <th scope="col">Image</th>
                <th scope="col">Favorite</th>
            </tr>
    )    
}

export default TableHead;