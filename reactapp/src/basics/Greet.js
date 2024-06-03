import React from 'react'

export default function Greet() {
    let cdt = new Date()
    let hours = cdt.getHours()

    let msg = "Good Evening!"
    if (hours < 12)
        msg = "Good Morning!"
    else
        if (hours < 17)
             msg = "Good Afternoon!"
    
  return (
      <h1 style={{ color: 'red' }}>{msg.toUpperCase()}</h1>
  )
}
