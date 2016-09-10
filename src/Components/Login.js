import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router';
import Rebase from 're-base'
import LoginContainer from '../Containers/LoginContainer'


var base = {
  apiKey: "AIzaSyBO3yV6c6dwm6Zsrlxa9wW431Spe5P1Icg",
  authDomain: "etsy-demo-16f2c.firebaseapp.com",
  databaseURL: "https://etsy-demo-16f2c.firebaseio.com",
  storageBucket: "etsy-demo-16f2c.appspot.com",
};

//
//
// class Login extends Component {
//
//   createUser(event) {
//     event.preventDefault();
//     let email = this.refs.email.value;
//     let password = this.refs.password.value;
//     base.createUser({
//     email, password
// }, this.handleCreatedUser);
// }
//
// handleCreatedUser(error, authData) {
//   console.log('auth data', authData);
//   console.log('error', error);
//
// }

class Login extends Component {
  constructor() {
    super();
    this.state = {login: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    if (this.state.login) {
      base.authWithPassword({email, password}, this.authHandler);
    } else {
      this.createUser(email, password);
    }
  }

  authHandler(error, authData) {
    if(error){
      console.log(error);
    } else {
      this.context.router.push('/home');
      console.log(authData);
    }
  }

  toggleLogin() {
    this.setState({login: !this.state.login});
  }

  createUser(email, password) {
    base.createUser({email, password}, function(error, authData) {
      console.log(authData);
    });
  }



  render() {
    return (
      <div>
        <LoginContainer
            handleSubmit={this.handleSubmit}
            login={this.state.login}
            toggleLogin={this.toggleLogin.bind(this)} />
          {this.props.children}
      </div>
    );
  }
}

export default Login;
