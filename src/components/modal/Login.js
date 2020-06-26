import React from 'react';
import './Modal.css';



const Login = ({ showLoginSignIn }) => {

  return (
    <>
        <form action='#' method='POST'>
            <h2>Login </h2>
            
            <label> Email:</label>
            <input type='text' name='name' placeholder='your-email@example.com'/>
            
            <label> Password:</label>
            <input type='password' name='password'  />

            <button>Login</button>

            <p>If you haven't yet created an account, please <strong onClick={() => showLoginSignIn()}>sign up</strong></p>
        </form>
    </>

  );
}

export default Login;