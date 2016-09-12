import React, {Component, PropTypes} from 'react';
import {hashHistory, Link} from 'react-router';
import Rebase from 're-base'
// import LoginContainer from '../Containers/LoginContainer'
import Register from './Register'

const base = Rebase.createClass({
  apiKey: "AIzaSyBO3yV6c6dwm6Zsrlxa9wW431Spe5P1Icg",
  authDomain: "etsy-demo-16f2c.firebaseapp.com",
  databaseURL: "https://etsy-demo-16f2c.firebaseio.com",
  storageBucket: "etsy-demo-16f2c.appspot.com"
});

class Login extends Component {
  constructor(props) {
    super([props]);
    this.state = {
      login: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    if (this.state.login) {
      base.authWithPassword({
        email,
        password
      }, this.authHandler);
    } else {
      this.createUser(email, password);
    }
  }

  authHandler(error, authData) {
    if (error) {
      console.log(error);
    } else {
      hashHistory.push('/home');
      //hashHistory.push takes you to the next page
      console.log(authData);
    }
  }

  render() {
    return (
      <div>
        <div className="login-form">
          <h3>Login</h3>
          <form onSubmit={this.props.handleSubmit}>
            <input className="lgInput" type="text" name="username" placeholder="Username"/>
            <br/>
            <input className="lgInput" type="password" name="password" placeholder="Password"/>
            <br/>
            <br/>
            <Link to="/home">
              <button type="submit" className="login">Login</button>
            </Link>
            <br/>
            <br/>
            <Link to="/register" className="newBtn">New user, sign up now and be cool</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
