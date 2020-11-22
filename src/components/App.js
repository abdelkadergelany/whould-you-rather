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
             
            <Route  path='/' component={Home} />
           
            <Route exact path='/new-question' component={NewQuestion} />
            <Route exact path='/leader-board' component={LeaderBoard} />
            <Route exact path='/view-pool' component={Pool} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/give-answer' component={GiveAnswer} />
            

        </div>
    </Router>
  );
}

export default App;
