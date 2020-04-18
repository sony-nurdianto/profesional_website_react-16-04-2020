import React from 'react';
import Home from './components/Home'
import Menu from './components/Menu'
import Article from './components/Article/Article'
import Main from './components/Article/Main'
import Hire from './components/Hire'
import Portofolio from './components/Portofolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
         <Menu/> 
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/portofolio" component={Portofolio}></Route>
        <Route exact path="/Article" component={Article}></Route>
        <Route exact path="/Article/:id" component={Main}/>
        <Route exact path="/Hire" component={Hire}></Route>
      </Switch>
    </Router>
  );
}

export default App;
