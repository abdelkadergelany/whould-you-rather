import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container">
             <Link className="nav-link" className="navbar-brand" to='/questions/answred'>WHould_U_Rather</Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                      <NavLink  activeClassName="active" to="/questions/answred"  className="nav-link">Home</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink  activeClassName="active" to="/new-question"  className="nav-link">New Questions</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink  activeClassName="active" to="/leader-board"  className="nav-link">Leader Board</NavLink>
                      </li>
                   </ul>
                   <div className="form-inline my-2 my-lg-0">
                      <span className=" text-primary m-3" type="search" >Aly kader</span>
                      <span className="m-3 " type="search" ><img width="50px" height="50px" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" /></span>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                   </div>
                </div>
             </div>
          </nav>
          <hr />
       </div>
        )
    }
}
