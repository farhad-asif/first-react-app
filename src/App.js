import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import Welcome from './components/pages/Welcome';
import Package from './components/pages/Package';
import Footer from './components/pages/Footer';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function app() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="/">
          <Package />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>


  );
}

export default app;

