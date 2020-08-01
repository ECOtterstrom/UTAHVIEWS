import React from "react";


const TableHead = () => {
    return (
            <tr>
                {/* <td>onClick={() =><Button>Last Name</Button>}</td> */}
                <td>Name</td>
                <td>Type</td>
                <td>Summary</td>
                <td>Difficulty</td>
                <td>Length</td>
                <td>Image</td>
            </tr>
    )    
}

export default TableHead;