import React, {Component} from 'react';

function LoginContainer(props) {
  return (
    <div className="login-form">
      {props.login ? <h3>Login</h3> : null}
      <form onSubmit={props.handleSubmit}>
        <input type="text" className="loginInput" placeholder="Username" />
        <br/>
        <input type="password" className="loginInput" placeholder="Password" />
        <br/>
        <button type="submit" className="login" value="Login" >Login</button>
        <button onClick={props.toggleLogin} className="register" value="Register">Register</button>
      </form>
    </div>

  );
}





export default LoginContainer;
