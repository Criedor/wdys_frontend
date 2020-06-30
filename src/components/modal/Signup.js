import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import "./Modal.css";

const SignIn = () => {
  const { setModal, setModalOption } = useContext(ModalContext);

  return (
    <>
      <div className="login-body">
        <form action="#" method="POST">
          <h2>Sign up </h2>
          <label> Name:</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label> Email:</label>
          <input type="text" name="name" placeholder="your-email@example.com" />

          <label> Password:</label>
          <input type="password" name="password" />
          <button className="action blue">Sign up</button>
          <p>
            If you already have an account, please
            <strong
              onClick={() => {
                setModal(1);
                setModalOption(1);
              }}
            >
              login
            </strong>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
