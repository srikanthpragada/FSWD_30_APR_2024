import React from 'react'

export default function Interest(props) {

    function calculateInterest() {
        // Take amount 
        var amount = document.getElementById("amount").value 
        var rate = props.rate 
        if (!rate)
            rate = 9 // default rate 

        var interest = amount * rate / 100 
        window.alert(interest)
    }
    return (
        <>
            <h2>Interest Calculation</h2>
            Amount <br />
            <input type="number" id="amount" />
            <p />
            <button onClick={calculateInterest}>Calculate</button>
        </>
    )
}
