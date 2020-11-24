import React, { Component } from 'react'
import {NavLink,Redirect,Route, useLocation} from 'react-router-dom'
import Answered from './Answered'
import Unanswered from './Unanswered'

const Togle = (a) => {
   let location = useLocation();
  const val = location.pathname !=='/'? <span></span>:<Redirect to='/questions/unanswred' />
  
     return val ;

}
 class Home extends Component {


    render() {
  
        return ( 
           
  <div className="container">
    <Togle/>
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