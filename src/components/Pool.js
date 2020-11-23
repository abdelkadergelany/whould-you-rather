import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Pool extends Component {
    render() {
      const question = this.props.questions ? this.props.questions[this.props.match.params.id] : null
      const user = question ? this.props.users[question.author] : null 
      let fisrtOption = (((question.optionOne.votes.length) / ((question.optionOne.votes.length) + (question.optionTwo.votes.length))) * 100)
      fisrtOption=Number.parseFloat(fisrtOption).toPrecision(3)
      let secondOption = (((question.optionTwo.votes.length) / ((question.optionOne.votes.length) + (question.optionTwo.votes.length))) * 100)
         secondOption = Number.parseFloat(secondOption).toPrecision(3)


        return (
         <div className="container">
         <div className="wor align-item-center">
           <div className="col-12 mx-auto">
             <div className="card">
               <div className="card-body ">
                 <ul className="list-unstyled">
                   <li className="media">
                     <img
                       className="mr-3"
                       width="100px"
                       height="100px"
                       src={user ? user.avatarURL : null}
                       alt="Generic placeholder image"
                     />
                     <div className="media-body">
                       <h5 className="mt-0 mb-1">{user ? user.name : null}</h5>
                       <p>Would you rather</p>
                     </div>
                   </li>
                   <hr />
                 </ul>
                 <div className="m-2 p-2 border border-secondary">
                   <span>{question ? question.optionOne.text : null}</span>
                   <div className="m-3 progress ">
                     <div
                       className="progress-bar progress-bar-info"
                       role="progressbar"
                       aria-valuenow="15"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: fisrtOption + "%" }}
                     >
                       {fisrtOption}
                     </div>
                   </div>
                   <span>
                     {question.optionOne.votes.length} out of{" "}
                     {question.optionOne.votes.length +
                       question.optionTwo.votes.length}{" "}
                     votes
                   </span>
                   <br />
                   <span className="text-danger">
                     {question ? (
                       question.optionOne.votes.includes(this.props.authedUser) ? (
                         <span>Your choice</span>
                       ) : null
                     ) : null}
                   </span>
                 </div>
                 <div className="m-2 p-2 border border-secondary">
                   <span>{question ? question.optionTwo.text : null}</span>
                   <div className="m-3 progress ">
                     <div
                       className="progress-bar progress-bar-info"
                       role="progressbar"
                       aria-valuenow="15"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: secondOption + "%" }}
                     >
                       {secondOption}
                     </div>
                   </div>
                   <span>
                     {question.optionTwo.votes.length} out of{" "}
                     {question.optionOne.votes.length +
                       question.optionTwo.votes.length}{" "}
                     votes
                   </span>
                   <br />
                   <span className="text-danger">
                     {question ? (
                       question.optionTwo.votes.includes(this.props.authedUser) ? (
                         <span>Your choice</span>
                       ) : null
                     ) : null}
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       
        )
    }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
   return {
      questions,
      users,
      authedUser,

  }
}


export default connect(mapStateToProps)(Pool)