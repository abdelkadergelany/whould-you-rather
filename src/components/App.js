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
  Link,
  
} from 'react-router-dom'
import QuestionList from './QuestionList';


function App() {
  return (
    <Router>
        <div className="App">
            <NavBar />
            <Route exact path='/view-pool/:id' component={Pool} />
            
            <Route exact path='/give-answer/:id' component={GiveAnswer} />


            <Route exact path='/new-question' component={NewQuestion} />
            <Route exact path='/leader-board' component={LeaderBoard} />
            
            <Route exact path='/login' component={Login} />
            <Route exact path='/give-answer' component={GiveAnswer} />
            
            <Route  path='/' component={Home} />
            

        </div>
    </Router>
  );
}

export default App;
