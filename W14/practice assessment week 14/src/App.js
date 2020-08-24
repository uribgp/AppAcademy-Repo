import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import StaffPage from './StaffPage';
//import { Route, Link, NavLink } from "react-router-dom";

const App = (props) => {
  console.log("App.js says that props = ", props);
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/staff' render={() => <StaffPage staff={props.data.company.staff} />} />
        <Route path="/about" render={() => <AboutPage company={props.data.company} /> } />
        <Route path="*" render={() => <HomePage company={props.data.company} /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
