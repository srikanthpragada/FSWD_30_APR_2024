import React, { useState } from 'react'

export default function Interest2(props) {
    let [interest, setInterest] = useState(0)

    function calculateInterest() {
        // Take amount 
        var amount = document.getElementById("amount").value 
        var rate = props.rate 
        if (!rate)
            rate = 9 // default rate 

        setInterest(amount * rate / 100)
      
    }
    return (
        <>
            <h2>Interest Calculation</h2>
            Amount <br />
            <input type="number" id="amount" />
            <p />
            <button onClick={calculateInterest}>Calculate</button>
           
            {
                //interest > 0 ? <h3 className="text-primary">Interest = {interest}</h3> : ''
                interest > 0 && <h3 className="text-primary">Interest = {interest}</h3>
            }
        </>
    )
}
