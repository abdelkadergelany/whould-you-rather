import React, { Component } from 'react'
import {NavLink,Redirect,Route} from 'react-router-dom'
import Answered from './Answered'
import Unanswered from './Unanswered'


 class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         complete:true             
     }
     this.handleValueChange = this.handleValueChange.bind(this);


  }

  handleValueChange() {
   this.setState({complete:false}); 
 }

    render() {
      if (this.state.complete === true) {
         this.handleValueChange()
         return <Redirect to='/questions/unanswred' />
     }
        return (
           
  <div className="container">
   <div className="col-md-6 m-auto align-item-center" >
      <ul className="nav nav-tabs" id="myTab" role="tablist">
         <li className="nav-item">
         <NavLink  activeClassName="active" to="/questions/answred"  className="nav-link">Answered Questions</NavLink>
         </li>
         <li className="nav-item">
         <NavLink  activeClassName="active" to="/questions/unanswred"  className="nav-link">Unanswered Question</NavLink>
         </li>
      </ul>
   </div>
   <br/>
   <div className="tab-content" id="myTabContent">
  
   <Route exact path='/questions/unanswred' component={Unanswered} />
   <Route exact path='/questions/answred' component={Answered} />
   
   
       
   </div>
</div>
           
        )
    }
}

export default Home;