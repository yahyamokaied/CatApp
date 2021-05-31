//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import MrChat from './MrChat';
import Home from './Home';



function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/mrchat" component={MrChat} />
    </Switch>
    </div>
    </Router>

  );
}

export default App;
