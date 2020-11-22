import React, { Component } from 'react'
import QuestionList from './QuestionList'

export default class Unanswered extends Component {
    render() {
        return (
            <div>
                <QuestionList rout='give-answer' />
            </div>
        )
    }
}
