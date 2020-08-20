import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Red from './Red';
import Green from './Green';
import Blue from './Blue';
import Violet from './Violet';

const Rainbow = () => {
    return (
        <div>
            <h1>Rainbow Router!</h1>

            <div id='rainbow'>
                <Route path='/red' component={Red} />
                <Route path="/green" component={Green} />
                <Route path='/blue' component={Blue} />
                <Route path="/violet" component={Violet} />
                <NavLink to="/red">Red</NavLink>
                <NavLink to="/blue">Blue</NavLink>
                <NavLink to='/green'>Green</NavLink>
                <NavLink to="/violet">Violet</NavLink>
            </div>
        </div>
    )
}

export default Rainbow;