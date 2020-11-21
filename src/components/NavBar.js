import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container">
                <a className="navbar-brand" href="#">WHould_U_Rather</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link" href="#">New Questions</a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link " href="#">Leader Board</a>
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
