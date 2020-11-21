import React, { Component } from 'react'

export default class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
            <div className="wor align-item-center ">
               <div className="col-md-6 mx-auto mb-2">
                  <div className="card border border-primary">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src="https://img.lovepik.com/element/40175/2566.png_300.png" alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1"> Aly abdelkader </h5>
                                 <p>Would you rather</p>
                                 <h4>Rank: <span className="badge badge-warning">1</span></h4>
                                 <h6>
                                 Score: <span className="badge badge-info">27</span></h6>
                              </div>
                           </li>
                           <hr />
                        </ul>
                        <div className="row align-item-center" >
                           <div className="col-md-6 m-auto">
                              <ul className="list-unstyled">
                                 <li>Answered Questions <span className="badge badge-secondary">12</span></li>
                                 <li>Asked Questions <span className="badge badge-danger">15</span></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}
