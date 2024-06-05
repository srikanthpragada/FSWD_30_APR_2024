import React, { Component } from 'react'

export default class CourseCC extends Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.fee = props.fee
    }
    render() {
        return (
            <>
                <h2>{this.title}</h2>
                <h2>{this.fee}</h2>
            </>
        )
    }
}
