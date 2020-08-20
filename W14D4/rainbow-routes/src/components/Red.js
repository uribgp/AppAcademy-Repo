import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './Orange';
import Yellow from './Yellow';

const Red = () => (
  <div>
    <h2 className="red">Red</h2>
    <Route path='/red/yellow' component={Yellow}/>
    <Route path='/red/orange' component={Orange}/>

    <NavLink exact to='/red'>Red only</NavLink>
    <NavLink to='/red/orange' >Add orange</NavLink>
  </div>
);

export default Red;