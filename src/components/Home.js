import React, { Component } from 'react'
import {NavLink,Route, withRouter} from 'react-router-dom'
import Answered from './Answered'
import Unanswered from './Unanswered'


 class Home extends Component {
    render() {
        
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
   <Route  path='/questions/answred' component={Answered} />
   <Route exact path='/questions/unanswred' component={Unanswered} />
   
       
   </div>
</div>
           
        )
    }
}

export default withRouter(Home);