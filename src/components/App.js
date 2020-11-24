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
  Switch, 
} from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import P404 from './P404';
import { LoadingBar } from 'react-redux-loading';

const  mapDispatchToProps = dispatch => ({
  LoadData: () => dispatch(handleInitialData())
});

class App extends Component {

  componentDidMount() {
    this.props.LoadData();
  }
  
  render(){
 
    return (
      <Router>
        <LoadingBar />
          <div className="App">
           
              <NavBar />
  
              {this.props.authedUser === null
              ? <Login />
              : <div>
                <Switch> 
                   
                   <Route exact path='/view-pool/:id'  component={Pool} />           
                   <Route exact path='/give-answer/:id' component={GiveAnswer} />
                   <Route exact path='/new-question' component={NewQuestion} />
                   <Route exact path='/leader-board' component={LeaderBoard} />           
                   <Route exact path='/login' component={Login} />  
                   <Route  path='/'  component={Home} />

                   <Route component={P404} />                               
                   
                 </Switch>
                </div>}
                   
  
          </div>
      </Router>
    )

  }
  
}


  const mapStateToProps = state => {
    const question_id = Object.keys(state.questions).sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp)
    const user = state.authedUser ? state.users[state.authedUser] : null
    const answerq = user ? user.answers : null
    let answered_quesion_id = answerq ? Object.keys(answerq) : []
    answered_quesion_id = question_id.filter((qid) => answered_quesion_id.includes(qid))
       
    return {
      authedUser: state.authedUser,
      users: state.users,
      questions: state.questions,
      answered_questions:answered_quesion_id
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
