import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home.js/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
