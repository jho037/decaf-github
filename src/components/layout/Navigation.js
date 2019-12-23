import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../pages/Home.js';
import Publications from '../pages/Publications.js'
import Introduction from '../pages/Introduction.js'

function Navigation() {
    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand text-white" to="/home">DECAF&nbsp;<i class="fas fa-mug-hot"></i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/Introduction">Introduction <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/publications">Publications</Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="https://github.com/decaf-project/DECAF/wiki">WikiPage <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="https://github.com/decaf-project/DECAF">Github <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
  </div>
</nav>

<Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/publications">
      <Publications />
    </Route>
    <Route path="/introduction">
      <Introduction />
    </Route>
  </Switch>
</Router>
    );
}

export default Navigation;