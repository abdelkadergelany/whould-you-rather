import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

 class Answered extends Component {
    render() {
        return (
        <div>
             <div className="tab-pane fade show active" id="answred" role="tabpanel" aria-labelledby="home-tab">
                 <div className="row ">
                        {this.props.answered_questions.map((id) => (
                            
                              <QuestionList  id={id}  rout='view-pool' />
                            
                        ))}

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
      authedUser: state.authedUser,
      users: state.users,
      questions: state.questions,
      answered_questions:an_q
    }
}

export default connect(mapStateToProps)(Answered)

