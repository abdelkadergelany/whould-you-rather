import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

 class Unanswered extends Component {
    render() {
        return (
            <div>
            <div className="tab-pane fade show active" id="answred" role="tabpanel" aria-labelledby="home-tab">
                <div className="row ">
                    

                           {this.props.all_questions.map((id) => {
                            if (!(this.props.answered_questions.includes(id))) {
                                return (
                                    <QuestionList key={id} id={id}  rout='give-answer' />
                                        
                                    
                                )
                            }
                            else {
                                return null
                            }
                        })
                        } 

                </div>
            </div> 
      </div>
        )
    }
}

const mapStateToProps = state => {
    const qids = Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp)
    const user = state.authedUser ? state.users[state.authedUser] : null
    const answerqt = user ? user.answers : null
    let an_q = answerqt ? Object.keys(answerqt) : []
    an_q = qids.filter((qid) => an_q.includes(qid))
    return {
      answered_questions:an_q,
      all_questions:qids
    }
}

export default connect(mapStateToProps)(Unanswered)