import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { manageSaveAnswer } from '../actions/questions';

const  mapDispatchToProps = dispatch => ({
   manageSaveAnswer: (ans) => dispatch(manageSaveAnswer(ans))

 });

 class GiveAnswer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         complete:false
       
        
     }

      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
     event.preventDefault()
     if(event.target['val']['value']==='')
     {
        return false
     }
     const {authedUser } = this.props
     const qid = this.props.match.params.id
     const answer = event.target['val']['value']
     this.props.manageSaveAnswer({ authedUser, qid, answer })

     this.setState({complete:true})
    



    }
    
    render() {
      if (this.state.complete === true) {
         return <Redirect to={`/view-pool/${ this.props.match.params.id }`} />
     }

      const question = this.props.questions ? this.props.questions[this.props.match.params.id] : null
      
      if (question===undefined)
      {
       return <Redirect to='/notfound' />
     }
      const user = question ? this.props.users[question.author] : null 
    

        return (
            <div className="container">
            <div className="wor align-item-center">
               <div className="col-12 mx-auto">
                  <div className="card">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src={user ? user.avatarURL : null} alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1">{user ? user.name : null}</h5>
                                 <p>Would you rather</p>
                              </div>
                           </li>
                           <hr />
                        </ul>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                              <div className="row align-item-center" >
                                 <div className="col-md-6 m-auto">
                                    <label htmlFor="v1">
                                    <input id="v1" name="val" type="radio" value="optionOne" /><span> {question ? question.optionOne.text : null}</span><br/>
                                    </label> <br/>
                                 </div>
                              </div>
                              <div className="row align-item-center" >
                                 <div className="col-md-6 m-auto">
                                    <label htmlFor="v2">
                                    <input  id="v2" name="val" type="radio" value="optionTwo" /><span> {question ? question.optionTwo.text : null}</span><br/>
                                    </label>
                                 </div>
                              </div>
                           </div>
                           <div className="form-group">
                              <div className="row align-item-center" >
                                 <div className="col-md-6 m-auto">
                                    <input type="submit" className="form-control btn btn-primary"/>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}

const mapStateToProps = state => {
   return {
      questions: state.questions,
      users: state.users,
     authedUser: state.authedUser,
   }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GiveAnswer))