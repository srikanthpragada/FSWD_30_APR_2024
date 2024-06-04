import React, { Component } from 'react'

export default class GreetCC extends Component {

    getMessage() {
        return "Greetings from Class Component!";
    }
    render() {
        return (
            <h1>{this.getMessage()}</h1>
        )
    }
}
