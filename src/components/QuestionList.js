import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class QuestionList extends Component {
    render() {
        return (
            <div>
            <div className="tab-pane fade show active" id="answred" role="tabpanel" aria-labelledby="home-tab">
            <div className="row ">
               <div className="col-sm-6 mb-3  ">
                  <div className="card border border-primary">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src="https://img.lovepik.com/element/40175/2566.png_300.png" alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1">Aly abdelkader</h5>
                                 tate fringilla. Donec lacinia congue felis in faucibus.
                              </div>
                           </li>
                        </ul>
                        <button className="btn btn-primary btn-lg" >view pool</button>
                     </div>
                  </div>
               </div>

               <div className="col-sm-6 mb-3  ">
                  <div className="card border border-primary">
                     <div className="card-body ">
                        <ul className="list-unstyled">
                           <li className="media">
                              <img className="mr-3" width="100px" height="100px" src="https://img.lovepik.com/element/40175/2566.png_300.png" alt="Generic placeholder image" />
                              <div className="media-body">
                                 <h5 className="mt-0 mb-1">Aly abdelkader</h5>
                                 tate fringilla. Donec lacinia congue felis in faucibus.
                              </div>
                           </li>
                        </ul>
                        <button className="btn btn-primary btn-lg" >view pool</button>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>

    

         </div>
        )
    }
}
