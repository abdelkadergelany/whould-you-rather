import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar';
import Home from './Home';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import GiveAnswer from './GiveAnswer';
import Pool from './Pool';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared';

const  mapDispatchToProps = dispatch => ({
  LoadData: () => dispatch(handleInitialData())
});

class App extends Component {

  componentDidMount() {
    // this.props.dispatch(handleInitialData())
    this.props.LoadData();

    // console.log('tester1')
    // console.log(this.props.users)
    // console.log('this.props.authedUser')
    // console.log(this.props.authedUser)
    // console.log('this.props.authedUser')
   

  }
  
  render(){
 
    return (
      <Router>
          <div className="App">
              <NavBar />
  
              {this.props.authedUser === null
              ? <Login />
              : <div>
                   <Route exact path='/view-pool/:id' component={Pool} />           
                   <Route exact path='/give-answer/:id' component={GiveAnswer} />
                   <Route exact path='/new-question' component={NewQuestion} />
                   <Route exact path='/leader-board' component={LeaderBoard} />           
                   <Route exact path='/login' component={Login} />
                   <Route exact path='/give-answer' component={GiveAnswer} />           
                   <Route  path='/' component={Home} />
                </div>}
                   
  
          </div>
      </Router>
    );

  }
  
}

// function mapStateToProps ({authedUser, users, questions}) {
//   return {
//     authedUser,
//     questions,
//     users
//     }
//   }

  const mapStateToProps = state => {
    
    return {
      authedUser: state.authedUser,
      users: state.users,
      questions: state.questions
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
