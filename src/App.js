import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Tasks from './containers/Tasks/Tasks';
import NewTask from './components/NewTask';
import EditTask from "./components/EditTask";

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        TODO
      </header>

      <Router>
        <Route path="/" exact component={Tasks} />
        <Route path="/add" exact component={NewTask} />
        <Route path="/edit" exact component={EditTask} />
      </Router>

    </div>
  );
}

export default App;
