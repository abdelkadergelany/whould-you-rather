import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
           
  <div className="container">
   <div className="col-md-6 m-auto align-item-center" >
      <ul className="nav nav-tabs" id="myTab" role="tablist">
         <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#answred" role="tab" aria-controls="home" aria-selected="true">Answered Questions</a>
         </li>
         <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#unanswred" role="tab" aria-controls="profile" aria-selected="false">Unanswered Question</a>
         </li>
      </ul>
   </div>
   <br/>
   <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="answred" role="tabpanel" aria-labelledby="home-tab">
         <div className="row ">
            <div className="col-sm-6 mb-3 ">
               <div className="card">
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
      <div className="tab-pane fade" id="unanswred" role="tabpanel" aria-labelledby="profile-tab">
         <div className="row ">
            <div className="col-sm-6 mb-3 ">
               <div className="card">
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
</div>
           
        )
    }
}
