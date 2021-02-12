import Tasks from './containers/Tasks';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import './App.css';
import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router 
} from "react-router-dom";


const App = () => {
  
  return (
    <div className="app">
      <header className="app-header">
        TO DO
      </header>

      <Router>
        <Switch>
          <Route path="/" exact component={Tasks}/>
          <Route path="/add" exact component={NewTask} />
          <Route path="/edit" exact component={EditTask} />
          <Redirect to="/"/>
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
