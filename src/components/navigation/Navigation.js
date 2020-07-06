import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { ReactComponent as Logo } from './wdys-logo.svg'
import Axios from 'axios'
import ModalContext from '../../contexts/ModalContext'
import UserContext from '../../contexts/UserContext'
import './Navigation.css';


const Navigation = () => {
  const history = useHistory()
  const { setModal, setModalOption } = useContext(ModalContext)
  const { role, setRole, setUserId, setUserName, userId } = useContext(UserContext)


  const redirect = () =>{
    switch(role){
      case "0": history.push('/projects'); break;
      case "1": history.push('/translation'); break;
      default: history.push('/')
    }
  }
  
  const login = () =>{
      if (Cookies.get('token') !== "undefined" && Cookies.get('token')) {
      
        Axios.put("https://wdys.herokuapp.com/verify", {token: Cookies.get('token'), user_id: Cookies.get('user_id')})
        .then((res) => {
          Cookies.set("token", res.data.token);
          Cookies.set("role", res.data.role);
          setUserId(res.data.user_id);
          setUserName(res.data.displayname);
          setRole(res.data.role);
          return res.data.role;
        })
        .then((res) => {
          switch (res) {
            case "0":
              history.push("/projects");
              break;
            case "1":
              history.push("/translation");
              break;
            default:
              history.push("/error");
          }
        });
      }
      else {
      setModal(1); setModalOption(1)
      }
  }
  
  const logout = (e) =>{
    Cookies.remove('token');
    Cookies.remove('role');
    Cookies.remove('user_id');
    setUserId()
    setRole()
    history.push("/")
  }

  return (
    <div className="navbar">
        <div className='navbar-contain'>
        <div className='navbar-logo nav-btn' onClick={() => redirect()}><Logo/></div>
        {userId? 
          <div className='navbar-logger' onClick={() => logout()}>Logout</div>
          :<div className='navbar-logger' onClick={() => login()}>Login</div>
        }
        </div>
    </div>
  );
}

export default Navigation;