import React, { Component } from 'react'
import { connect } from 'react-redux';
import { manageSaveQuestion } from '../actions/questions';
import { Redirect, withRouter } from 'react-router-dom';



const  mapDispatchToProps = dispatch => ({
   manageSaveQuestion: (qs) => dispatch(manageSaveQuestion(qs))

 });

 class NewQuestion extends Component {
   constructor(props) {
      super(props);

      this.state = {
         authedUser:this.props.authedUser,
         complete2:false        
     }

      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
     event.preventDefault()
     if(event.target['option1']['value']==='' || event.target['option2']['value']==='' )
     {
        return false
     }
     const author  = this.state.authedUser
     const optionOneText  = event.target['option1']['value']
     const optionTwoText  = event.target['option2']['value']
     
     this.props.manageSaveQuestion({ optionOneText, optionTwoText, author })

   this.setState({complete2:true})




    }
    render() {
      if (this.state.complete2 === true) {
         return <Redirect to='/questions/unanswred' />
     }
      const user = this.props.users[this.props.authedUser]

        return (
           
                <div className="container">
   <div className="wor align-item-center">
      <div className="border border-primary col-12 mx-auto">
         <div className="card">
            <div className="card-body ">
               <ul className="list-unstyled">
                  <li className="media">
                     <img className="mr-3" width="100px" height="100px" src={user.avatarURL} alt="Generic placeholder image" />
                     <div className="media-body">
                        <h5 className="mt-0 mb-1">{user.name}</h5>
                        <p>Would you rather</p>
                     </div>
                  </li>
                  <hr/>
               </ul>
               <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <div className="row align-item-center" >
                        <div className="col-md-6 m-auto">
                           <label htmlFor="v1">Option 1 </label><br/>
                           <input className="form-control" id="v1" name="option1" type="text"  /><br/>
                        </div>
                     </div>
                     <div className="row align-item-center" >
                        <div className="col-md-6 m-auto">
                           <label htmlFor="v2">Option 2</label><br/>
                           <input className="form-control" id="v2" name="option2" type="text"  /><br/>
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
     authedUser: state.authedUser,
     users: state.users
   }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewQuestion))