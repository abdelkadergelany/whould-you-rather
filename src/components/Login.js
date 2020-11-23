import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

const  mapDispatchToProps = dispatch => ({
   setAuthedUser: (id) => dispatch(setAuthedUser(id))
 });

 class Login extends Component {

    componentDidMount() {

      }
      constructor(props) {
         super(props);
 
         this.handleValueChange = this.handleValueChange.bind(this);
 
     }
 
     handleValueChange(event) {
         //console.log(event.target.value);
         this.props.setAuthedUser(event.target.value);
 
 
       }

    render() {
      const obj = this.props.users
        return (
         <div className="container">
         <div className="card text-center">
           <div className="card-header">Login</div>
           <div className="card-body">
             <h5 className="card-title">Choose an account</h5>
             <form>
               <div className="form-group">
                 <select
                   className="form-control"
                   id="exampleFormControlSelect1"
                   onChange={this.handleValueChange}
                 >
                   <option>Select a user</option>
                   {Object.keys(obj).map(function (keyName, keyIndex) {
                     return (
                       <option key={keyName} value={keyName}>
                         {obj[keyName].name}
                       </option>
                     );
                   })}
                 </select>
               </div>
               <div className="form-group">
                 <input type="submit" className="form-control btn btn-primary" />
               </div>
             </form>
           </div>
           <div className="card-footer text-muted">SECURITY</div>
         </div>
       </div>
       
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login)
