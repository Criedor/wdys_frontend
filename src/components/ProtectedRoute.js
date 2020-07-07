import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Cookies from "js-cookie";
import Axios from "axios"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { setUserId, setUserName, setRole } = useContext(UserContext);

  const login = () => {
  
    Axios.put("https://wdys.herokuapp.com/verify", {token: Cookies.get('token'), user_id: Cookies.get('user_id')})
    .then((res) => {
      setUserId(Cookies.get('user_id'));
      setUserName(res.data.displayname);
      setRole(Cookies.get('role'));
      return res
    })
    .catch((err) => {

        return <Route to={{pathname: "./"}}/>
      })
  };
  

  if (Cookies.get("token")) {
    if ( ()=>login().data.err !== "Invalid token")
    login()
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } 
  else {
    return (
      <Redirect to='./' />
    );
  }
}

export default ProtectedRoute;
