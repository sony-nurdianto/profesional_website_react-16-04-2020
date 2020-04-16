import React from 'react';
import Home from './components/Home'
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './components/style.css'

function App() {
  return (
    <Router>
        {/* <Menu className="menu-p"/> */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/portofolio" component={Menu}></Route>
        <Route path="/article" component={Home}></Route>
        <Route path="/contact" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
