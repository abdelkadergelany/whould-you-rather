import React, { Component } from 'react'
import QuestionList from './QuestionList'

export default class Answered extends Component {
    render() {
        return (
            <div>
                <QuestionList rout='view-pool' />
            </div>
        )
    }
}
