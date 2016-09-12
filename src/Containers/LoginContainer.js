import React, {Component} from 'react';
import {Link} from 'react-router';
import Rebase from 're-base'


class LoginContainer extends Component {
  render() {
  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" name="username" placeholder="Username"/>
        <br/>
        <input type="password" name="password" placeholder="Password"/>
        <br/>
        <button type="submit" className="login">Login</button>
        <br/>
        <Link to="/register" className="newBtn">New user, sign up now and be cool</Link>
        </form>
    </div>
    );
  }
}






export default LoginContainer;
