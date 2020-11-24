import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class P404 extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div class="error-actions">
                            <NavLink to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                                Take Me Home </NavLink>
                            <NavLink to="#" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
