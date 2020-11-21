import React, { Component } from 'react'

export default class Pool extends Component {
    render() {
        return (
            <div className="container">
            <div className="wor align-item-center">
               <div className="col-12 mx-auto">
                  <div className="card">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src="https://img.lovepik.com/element/40175/2566.png_300.png" alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1">Aly abdelkader</h5>
                                 <p>Would you rather</p>
                              </div>
                           </li>
                           <hr />
                        </ul>
                        <div className="m-2 p-2 border border-secondary">
                           <span>eat beans</span>
                           <div className="m-3 progress ">
                              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" 
                              style={{width: 15 + '%'}}>
                                 15%
                              </div>
                           </div>
                           <span>2 out of 5 votes</span><br/>
                        </div>
                        <div className="m-2 p-2 border border-secondary">
                           <span>eat rice</span>
                           <div className="m-3 progress ">
                              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"  style={{width: 85 + '%'}}>
                                 85%
                              </div>
                           </div>
                           <span>3 out of 5 votes</span><br/>
                           <span className="text-danger">your vote</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}
