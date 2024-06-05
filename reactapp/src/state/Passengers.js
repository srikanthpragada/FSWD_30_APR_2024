import React, { useState } from 'react'

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById("txtName").value 
        let age = document.getElementById("txtAge").value 

        passengers.push({ name: name, age: age })
        setPassengers(passengers)
        console.log(passengers)
    }

    return (
        <>
            <h2>Passengers</h2>
            Name <br />
            <input type="text" id="txtName" />
            <p />
            Age <br />
            <input type="number" id="txtAge" />
            <p></p>
            <button onClick={addPassenger}>Add</button>
            <p></p>
            <table>
                <tr><th>Name</th> 
                <th>Age</th>
                <th></th>
                </tr>
                {
                    passengers.map(p => 
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}
