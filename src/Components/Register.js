import React, {Component} from 'react';
import {Link} from 'react-router'
import Rebase from 're-base'


const base = Rebase.createClass({
  apiKey: "AIzaSyBO3yV6c6dwm6Zsrlxa9wW431Spe5P1Icg",
  authDomain: "etsy-demo-16f2c.firebaseapp.com",
  databaseURL: "https://etsy-demo-16f2c.firebaseio.com",
  storageBucket: "etsy-demo-16f2c.appspot.com",
});


class Register extends Component {
  createUser(event) {
    const rEmail = this.refs.email.value
    const rPassword = this.refs.password.value
    console.log("random", rEmail, rPassword);
    base.createUser({rEmail, rPassword}, function(error, authData) {
      console.log(authData);
  });
}


  render() {
    return (
      <div className="login-form">
        <h3>Register</h3>
        <input className="lgInput" type="text" name="username" placeholder="Username" ref="email"/>
        <br/>
        <input className="lgInput" type="password" name="password" placeholder="Password" ref="password"/>
        <br/>
        <br/>
        <input type="button" className="register" value="Register" onClick={() => this.createUser()}/>
        <br/>
        <br/>
        <Link to="/" className="newBtn">If you are already cool, go login!</Link>
      </div>
    );
  }
}
export default Register
