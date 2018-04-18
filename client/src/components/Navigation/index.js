import React from 'react';
// import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
// import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  // <ul>
  //   <button><Link to={routes.LANDING}>Landing</Link></button>
  //   <button><Link to={routes.HOME}>Home</Link></button>
  //   <button><Link to={routes.ACCOUNT}>Account</Link></button>
  //   <SignOutButton />
  // </ul>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="/">HikeUp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <button><a className="nav-item nav-link active" href="/">Home</a></button>
      <button><a className="nav-item nav-link" href="/home">Dashboard</a></button>
      <button><a className="nav-item nav-link" href="/account">Account</a></button>
      <button><a className="nav-item nav-link" href="/events">Events</a></button>
      <button><a className="nav-item nav-link" href="/create-events">Create Event</a></button>
      <button><a className="nav-item nav-link" href="/mtsinfo">Mountains</a></button>
      <SignOutButton />
    </div>
  </div>
</nav>



  

const NavigationNonAuth = () =>
  // <ul>
  //   <button><Link to={routes.LANDING}>Home</Link></button>
  //   <button><Link to={routes.SIGN_IN}>Sign In</Link></button>
  // </ul>

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="/">HikeUp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav float-right">
    <button><a className="nav-item nav-link active" href="/">Home</a></button>
    <button><a className="nav-item nav-link" href="/signin">Sign In</a></button>
    </div>
  </div>
</nav>






export default Navigation;
