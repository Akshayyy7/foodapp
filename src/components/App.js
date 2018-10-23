import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Landing from './Landing';
import SignUp from './Signup';
import SignIn from './Signin';
import HomeHod from './HomeHod';
import HomeTa from './HomeTa';
import HomeStudent from './HomeStudent';
import Issued from './Issued';
import { firebase } from '../firebase';
import './w3.css';
import './App.css';
import New1 from './New1';
import New3 from './New3';
import web1 from './web1';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }


 render() {
    return (
  <Router>
    <div>


      <hr/>

      <Route
        exact path='/'
        component={() => <Landing />}
      />
      <Route
        exact path='/signup'
        component={() => <SignUp />}
      />
<Route
        exact path='/new3'
        component={() => <New3 />}
      />
      <Route
        exact path='/new1'
        component={() => <New1 />}
      />
        <Route
        exact path='/signin'
        component={() => <SignIn />}
      />
      <Route
        exact path='/web1'
        component={() => <New1 />}
      />

      <Route
        exact path='/homeStudent'
        component={() => <HomeStudent />}
      />

	<Route
        exact path='/homeHod'
        component={() => <HomeHod />}
      />

	<Route
        exact path='/homeTa'
        component={() => <HomeTa />}
      />
	
	      <Route
        exact path='/issued'
        component={() => <Issued />}
      />

    </div>
  </Router>

    );
  }
}

export default App;
