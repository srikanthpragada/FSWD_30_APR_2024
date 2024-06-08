import React, { useState } from 'react'

function AddPassenger({ passengers, addFunc }) {
    let [passenger, setPassenger] = useState({ name: '', age: '' })
    let [message, setMessage] = useState("")

    function addPassenger(evt) {
        evt.preventDefault()  // do not refresh page
        setMessage('')
        // check whether name is unique 
        let result = passengers.find(p => p.name === passenger.name)
        if (result)   // found a passenger with the same name 
            setMessage('Duplicate Passenger Name!')
        else
            addFunc(passenger)  // call function in parent component 
    }

    function updateValue(e) {
        // update state with value entered in textbox 
        let ename = e.target.name
        let evalue = e.target.value
        setPassenger({ ...passenger, [ename]: evalue })
    }
    function clearAll(e) {
        e.preventDefault()
        setPassenger({ name: "", age: "" })
    }

    return (
        <>
            <form onSubmit={addPassenger}>
                Name < br />
                <input type="text" value={passenger.name} name="name"
                               onChange={updateValue} required maxLength="20" />
                &nbsp; <span className="text-danger">{message}</span>
                <p />
                Age < br />
                <input type="number" value={passenger.age} name="age" onChange={updateValue} required min="6" max="100" />
                <p></p>
                <button className="btn btn-primary" style={{ width: '100px' }}>Add</button>
                &nbsp;
                <button onClick={clearAll} className="btn btn-danger" style={{ width: '100px' }}>Clear</button>
                <p></p>
            </form>

        </>
    )
}

function ListPassengers({ passengers, deleteFunc }) {

    function deletePassenger(idxToDelete) {
        if (window.confirm("Do you want to delete?"))
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
        setPassengers(passengers.filter((v, idx) => idx !== idxToDelete))
    }

    function addNewPassenger(newPassenger) {
        setPassengers([...passengers, newPassenger])
    }

    function deleteAll() {
        setPassengers([])
    }
    return (
        <>
            <h2>Passengers</h2>
            <AddPassenger addFunc={addNewPassenger} passengers={passengers} />
            <ListPassengers passengers={passengers}
                deleteFunc={deletePassenger} />
            <p></p>
            {passengers.length > 0 && <button onClick={deleteAll}>Delete All</button>}
        </>
    )
}
