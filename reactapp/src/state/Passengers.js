import React, { useState } from 'react'

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById("txtName").value 
        let age = document.getElementById("txtAge").value 
        setPassengers([...passengers, { name: name, age: age }])
        //console.log(passengers)
    }

    function deletePassenger(idxToDelete) {
        //alert("Delete " + idxToDelete)
        setPassengers (passengers.filter( (v,idx) =>  idx !== idxToDelete))
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

            {passengers.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr><th>Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
              
                    <tbody>
                        {
                            passengers.map((p, idx) =>
                                <tr key={idx}>
                                    <td>{p.name}</td>
                                    <td>{p.age}</td>
                                    <td className="text-center">
                                        <button onClick={() => deletePassenger(idx)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </>
    )
}
