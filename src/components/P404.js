import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class P404 extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <NavLink to="/" className="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                Take Me Home </NavLink>
                            <NavLink to="#" className="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
