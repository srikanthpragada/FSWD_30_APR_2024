import React, { Component } from 'react'

export default class CounterCC extends Component {

    constructor() {
        super()
        this.state = { counter: 0 }
        this.increment = this.increment.bind(this)
    }
    increment() {
        console.log(this)
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <>
                <h2>Counter Class</h2>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}
