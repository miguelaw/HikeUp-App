import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Events from "./pages/Events";
import CreateEvents from "./pages/CreateEvents";
import Detail from "./pages/Detail";
import Mountains from "./pages/Mountains";
import MountainsDetail from "./pages/MountainsDetail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

//Auth
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import withAuthentication from './components/Session/withAuthentication';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/pw-forget" component={PasswordForgetPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/account" component={AccountPage} />

        <Route exact path="/events" component={Events} />
        <Route exact path="/create-events" component={CreateEvents} />
        <Route exact path="/events/:id" component={Detail} />
        <Route exact path="/mountains" component={Mountains} />
        <Route exact path="/mountains/:id" component={MountainsDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

// export default App;

export default withAuthentication(App);





