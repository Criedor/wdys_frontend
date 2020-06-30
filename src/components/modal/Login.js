import React, { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext'
import './Modal.css';



const Login = () => {

  const { setModal, setModalOption } = useContext(ModalContext)

  return (
    <>
      <div className='login-body'>
        <form action='#' method='POST'>
            <h2>Login </h2>
            
            <label> Email:</label>
            <input type='text' name='name' placeholder='your-email@example.com'/>
            
            <label> Password:</label>
            <input type='password' name='password'  />

            <button className='action blue'>Login</button>

            <p>If you haven't yet created an account, please <strong onClick={() => {setModal(1); setModalOption(2)}}>sign up</strong></p>
        </form>
      </div>
    </>

  );
}

export default Login;