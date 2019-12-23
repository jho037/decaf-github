import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './components/layout/Navigation.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/layout/Footer.js'

class App extends Component {
  render(){
    return (
      <div>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

