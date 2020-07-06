import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ModalContext from "../contexts/ModalContext";
import UserContext from "../contexts/UserContext";
// import "./Modal.css";
import Axios from "axios";
import Cookies from "js-cookie";

let history = useHistory();

const { setModal } = useContext(ModalContext);
const { setUserId, setUserName, setRole } = useContext(UserContext);

export const LoginCall = (e) => {
  e.preventDefault();

  console.log(e);

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
