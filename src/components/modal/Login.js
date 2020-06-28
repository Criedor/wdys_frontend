import React from 'react';
import './Modal.css';



const Login = ({ openModal }) => {

  return (
    <>
        <form action='#' method='POST'>
            <h2>Login </h2>
            
            <label> Email:</label>
            <input type='text' name='name' placeholder='your-email@example.com'/>
            
            <label> Password:</label>
            <input type='password' name='password'  />

            <button className='action blue'>Login</button>

            <p>If you haven't yet created an account, please <strong onClick={() => openModal(1,2)}>sign up</strong></p>
        </form>
    </>

  );
}

export default Login;