import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Modal.css";

const SignIn = () => {
  const { setModal, setModalOption } = useContext(ModalContext);
  const { setUserId, setUserName, setRole } = useContext(UserContext);

  let history = useHistory();

  const signin = (e) => {
    e.preventDefault();

    Axios.post("https://wdys.herokuapp.com/signup", {
      displayname: `${e.currentTarget[0].value}`,
      email: `${e.currentTarget[1].value}`,
      password: `${e.currentTarget[2].value}`,
    })
      .then((res) => {
        console.log(res.data)
        Cookies.set("token", res.data.token);
        Cookies.set("role", res.data.role);
        Cookies.set("user_id", res.data.user_id);
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
            history.push("/");
        }
        setModal(0);
      });
  };
  return (
    <>
      <div className="login-body">
        <form onSubmit={(e) => signin(e)} method="POST">
          <h2>Sign up </h2>
          <label> Name:</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label> Email:</label>
          <input type="text" name="name" placeholder="your-email@example.com" />

          <label> Password:</label>
          <input type="password" name="password" />
          <button className="action blue">Sign up</button>
          <p>
            If you already have an account, please <strong
              onClick={() => {
                setModal(1);
                setModalOption(1);
              }}
            > login</strong>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
