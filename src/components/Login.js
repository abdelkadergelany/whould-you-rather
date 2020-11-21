import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
   <div className="card text-center">
      <div className="card-header">
         Login
      </div>
      <div className="card-body">
         <h5 className="card-title">Choose an account</h5>
         <form>
            <div className="form-group">
               <select className="form-control" id="exampleFormControlSelect1">
                  <option>Gelany</option>
                  <option>aly</option>
                  <option>Kader</option>
               </select>
            </div>
            <div className="form-group">
               <input type="submit" className="form-control btn btn-primary"/>
            </div>
         </form>
      </div>
      <div className="card-footer text-muted">
         SECURITY
      </div>
   </div>
</div>
        )
    }
}
