import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Modal.css";

const Login = () => {
  const { setModal, setModalOption } = useContext(ModalContext);
  const { setUserId, setUserName, setRole } = useContext(UserContext);

  let history = useHistory();

  const login = (e) => {
    e.preventDefault();

    Axios.put("https://wdys.herokuapp.com/login", {
      email: `${e.currentTarget[0].value}`,
      password: `${e.currentTarget[1].value}`,
    })
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
        setModal(0);
      });
  };

  return (
    <>
      <div className="login-body">
        <form onSubmit={(e) => login(e)}>
          <h2>Login </h2>

          <label> Email:</label>
          <input autoFocus type="text" name="name" placeholder="your-email@example.com" />

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
