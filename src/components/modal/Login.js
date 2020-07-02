import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext"
import "./Modal.css";
import Axios from "axios";
import Cookies from "js-cookie";


const Login = () => {
  const { setModal, setModalOption } = useContext(ModalContext);
  const { setUserId, setUserName, setRole } = useContext(UserContext);

  const login = (e) => {
    e.preventDefault();
  
    Axios.put("http://localhost:3000/login", {
      email: `${e.currentTarget[0].value}`,
      password: `${e.currentTarget[1].value}`,
    })
    .then((res) => {
      Cookies.set("token", res.data.token); 
      Cookies.set("role", res.data.role);
      setUserId(res.data.user_id);
      setUserName(res.data.displayname);
      setRole(res.data.role)});
      history.push('/')
    };



  return (
    <>
      <div className="login-body">
        <form onSubmit={(e) => login(e)}>
          <h2>Login </h2>

          <label> Email:</label>
          <input type="text" name="name" placeholder="your-email@example.com" />

          <label> Password:</label>
          <input type="password" name="password" />

          <button className="action blue">Login</button>

          <p>
            If you haven't yet created an account, please{" "}
            <strong
              onClick={() => {
                setModal(1);
                setModalOption(2);
              }}
            >
              sign up
            </strong>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
