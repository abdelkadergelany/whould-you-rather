import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

 class Answered extends Component {

    componentDidMount() {
        this.forceUpdate();
    }

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

// const mapStateToProps = ({ questions, users, authedUser }) => {
//     const qids = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
//     const user = authedUser ? users[authedUser] : null
//     const answerqt = user ? user.answers : null
//     let an_q = answerqt ? Object.keys(answerqt) : []
//     an_q = qids.filter((qid) => an_q.includes(qid))
//    const  answered_questions = an_q
//     return {
//         authedUser,
//         qids,
//         answered_questions

//     }
// }

export default connect(mapStateToProps)(Answered)

