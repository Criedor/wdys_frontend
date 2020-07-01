import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import "./Modal.css";
import Axios from "axios";
import Cookies from "js-cookie";

const login = (e) => {
  e.preventDefault();
  console.log(e.currentTarget);
  Axios.put("https://wdys.herokuapp.com/login", {
    email: `${e.currentTarget[2]}`,
    password: `${e.currentTarget[4]}`,
  }).then((res) => {
    console.log(res);
    Cookies.set("token", res.headers["x-token"]);
  });
  console.log(Cookies.token);
};

// e.preventDefault()
// Axios.post("https://pokefight-wbs.herokuapp.com/auth/login%22,%60%7Bemail:%22$%7Be.target[0].value%7D%60,password:%60$%7Be.target[1].value%7D%60%7D)
// .then((res)=> {console.log(res.headers['x-auth-token']); Cookies.set('token', res.headers['x-auth-token'])})

const Login = () => {
  const { setModal, setModalOption } = useContext(ModalContext);

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
