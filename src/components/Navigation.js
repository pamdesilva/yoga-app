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
  <div className="navbar-menu" aria-label="main navigation">
    <div className="navbar-start">
      <Link to={routes.LANDING}>YOGI FINDER</Link>
    </div>
    <div className="navbar-end">
      <Link to={routes.HOME}>Dashboard</Link>
      <SignOutButton />
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navbar-menu" aria-label="main navigation">
    <div className="navbar-start">
      <p className="navbar-item"><Link to={routes.LANDING}>YOGI FINDER</Link></p>
    </div>
    <div className="navbar-end">
      <p className="navbar-item"><Link to={routes.SIGN_IN}>Instructor Login</Link></p>
    </div>
  </div>

);

export default Navigation;
