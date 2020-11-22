import React, { Component } from 'react'
import QuestionList from './QuestionList'
import {Link,NavLink,Route, Router} from 'react-router-dom'



export default class Home extends Component {
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
  
   <Route  path='/questions/answred' component={QuestionList} />
   <Route exact path='/questions/unanswred' component={QuestionList} />
   
       
   </div>
</div>
           
        )
    }
}