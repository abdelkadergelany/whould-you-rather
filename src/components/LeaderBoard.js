import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rank from './Rank'

 class LeaderBoard extends Component {
    render() {
        return (
            <div className="container">
            <div className="wor align-item-center ">
         
            {this.props.user_Id.map((id) => (
                    
                    <Rank id={id} />
                ))}

            </div>
         </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
   const user_Id = Object.keys(users)
       .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length)
           -
           (Object.keys(users[a].answers).length + users[a].questions.length)))
   return {
       user_Id
   }
}



export default connect(mapStateToProps)(LeaderBoard)