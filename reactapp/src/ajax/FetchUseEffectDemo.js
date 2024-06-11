import React, { useEffect, useState } from 'react'

export default function FetchUseEffectDemo() {
    const [now, setNow] = useState('')

    function getUTCTime() {
        // AJAX call
        fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
            .then(response => response.json())
            .then(data => setNow(data.datetime))
    }

    async function getTime() {
        // AJAX call
        let response = await fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
        let data = await response.json()
        setNow(data.datetime)
    }

    //useEffect(() => { getTime() }, []);
    useEffect(getUTCTime, []);
    
    return (
        <>
            <h1>Fetch Demo</h1>
            <h2>{now}</h2>
        </>
    )
}
