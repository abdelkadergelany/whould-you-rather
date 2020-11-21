import React, { Component } from 'react'

export default class NewQuestion extends Component {
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
                  <hr/>
               </ul>
               <form>
                  <div className="form-group">
                     <div className="row align-item-center" >
                        <div className="col-md-6 m-auto">
                           <label for="v1">Option 1 </label><br/>
                           <input className="form-control" id="v1" name="val1" type="text" value="" /><br/>
                        </div>
                     </div>
                     <div className="row align-item-center" >
                        <div className="col-md-6 m-auto">
                           <label for="v2">Option 2</label><br/>
                           <input className="form-control" id="v2" name="val2" type="text" value="" /><br/>
                        </div>
                     </div>
                  </div>
                  <div className="form-group">
                     <div className="row align-item-center" >
                        <div className="col-md-6 m-auto">
                           <input type="submit" className="form-control btn btn-primary"/>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
            
        )
    }
}
