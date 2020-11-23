import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

 class QuestionList extends Component {
    render() {
      const { question, user, id } = this.props
      const question_id = id

        return (
            
            // <div className="tab-pane fade show active" id="answred" role="tabpanel" aria-labelledby="home-tab">
            // <div className="row ">
           

               <div className="col-sm-6 mb-3  " >
                  <div className="card border border-primary">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src={user.avatarURL}  alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1">{user.name}</h5>
                                 <h4>Would you rather</h4>
                            <p>{question ? question.optionOne.text : null}</p>
                            <p>{question ? question.optionTwo.text : null}</p>
                              </div>
                           </li>
                        </ul>
                        <Link to={`/${ this.props.rout }/${ question_id }`} className="btn btn-primary btn-lg" >view pool</Link>
                     </div>
                  </div>
               </div>
               
         //    </div>
         // </div>
         
        )
    }
}

const mapStateToProps = ({ users, questions }, { id }) => {
   const question = questions ? questions[id] : null
   const user = question ? users[question.author] : {}

   return {
       question,
       user,
       id
   }
}

export default connect(mapStateToProps)(QuestionList)