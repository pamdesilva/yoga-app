import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul className="navbar">
    <li><Link to={routes.LANDING}>YOGI FINDER</Link></li>
    <li><Link to={routes.HOME}>Dashboard</Link></li>
    <li><SignOutButton /></li>
  </ul>
);

const NavigationNonAuth = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <p className="navbar-item"><Link to={routes.LANDING}>YOGI FINDER</Link></p>
      <button className="button navbar-item"><Link to={routes.SIGN_IN}>Instructor Login</Link></button>
    </div>
  </nav>

);

export default Navigation;
