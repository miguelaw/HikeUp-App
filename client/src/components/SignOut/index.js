import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    <a className="nav-item nav-link" href="/">Sign Out</a>
  </button>

export default SignOutButton;
