import React, { useState } from 'react'


function AddPassenger({ addFunc }) {

    function addPassenger(evt) {
        evt.preventDefault()  // do not refresh page 
        let name = document.getElementById("txtName").value
        let age = document.getElementById("txtAge").value
        let passenger = { name: name, age: age }
        addFunc(passenger)  // call function in parent component 
    }

    return (
        <>
            <form onSubmit={addPassenger} className="bg-secondary">
                Name < br />
                <input type="text" id="txtName" required  maxLength="20" />
                <p />
                Age < br />
                <input type="number" id="txtAge" required  min="6"  max="100" />
                <p></p>
                <button>Add</button>
                <p></p>
            </form>
        </>
    )
}

function ListPassengers({ passengers, deleteFunc }) {

    function deletePassenger(idxToDelete) {
        deleteFunc(idxToDelete)
    }
    return (
        <>
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

export default function PassengersList() {
    let [passengers, setPassengers] = useState([])

    function deletePassenger(idxToDelete) {
        //alert("Delete " + idxToDelete)
        setPassengers(passengers.filter((v, idx) => idx !== idxToDelete))
    }

    function addNewPassenger(newPassenger) {
        setPassengers([...passengers, newPassenger])
    }
    return (
        <>
            <h2>Passengers</h2>
            <AddPassenger addFunc={addNewPassenger} />
            <ListPassengers passengers={passengers}
                deleteFunc={deletePassenger} />
        </>
    )
}
