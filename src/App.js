
import React from 'react';
import NavigationBar from "./nav/NavigationBar"
import Home from "./Home/Home"
import './App.css';
import Province from "./Province/Province"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/province" exact component={Province} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
