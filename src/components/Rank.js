import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Rank extends Component {
    render() {
        const id = this.props.id
        const user = this.props.users[id]
         console.log(user)
        return (
            
            <div className="col-md-6 mx-auto mb-2" key={user.id}>
            <div className="card border border-primary">
               <div className="card-body ">
                  <ul className="list-unstyled">
                     <li className="media">
                        <img className="mr-3" width="100px" height="100px" src={user.avatarURL} alt="Generic placeholder image" />
                        <div className="media-body">
                           <h5 className="mt-0 mb-1"> {user.name} </h5>
                           <p>Would you rather</p>
       
                           <h6>
                                 Score: <span className="badge badge-info">{Object.keys(user.answers).length + user.questions.length}</span>
                           </h6>
                        </div>
                     </li>
                     <hr />
                  </ul>
                  <div className="row align-item-center" >
                     <div className="col-md-6 m-auto">
                        <ul className="list-unstyled">
                           <li>Answered Questions <span className="badge badge-secondary">{Object.keys(user.answers).length}</span></li>
                           <li>Asked Questions <span className="badge badge-danger">{user.questions.length}</span></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        users : state.users
    }
}



export default connect(mapStateToProps)(Rank)