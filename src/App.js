import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Entry from "./components/Entry";
import Protected from "./Protected";
import { withStyles } from "@material-ui/core/styles";
import Modal from "./components/modal/Modal";
import ModalContext from "./contexts/ModalContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./components/dashboard/Dashboard";
import "./App.css";

const App = () => {
  // State for opening modal Login / Signup
  const [modal, setModal] = useState(null);
  const [modalOption, setModalOption] = useState(1);
  const [userId, setUserId] = useState();
  const [role, setRole] = useState();
  const [userName, setUserName] = useState();

  // State to Open/Close the Edit/Delete popover menu
  const [anchorEl, setAnchorEl] = useState(null);

  // const variable to
  const open = Boolean(anchorEl);

  // Global styling for MUI componets found in components/dashboard/selectFields directory
  const GlobalCss = withStyles({
    "@global": {
      ".MuiInputBase-root": {
        fontFamily: "'Montserrat', sans-serif",
        paddingTop: "1em",
      },
      ".MuiSelect-select:focus": {
        backgroundColor: "transparent",
      },
      ".MuiInput-underline:after": {
        borderBottom: "1px solid #000000",
      },
      ".MuiMenuItem-root": {
        fontFamily: "'Montserrat', sans-serif",
      },
    },
  })(() => null);

  return (
    <div className="App">
      <ModalContext.Provider
        value={{
          modal,
          setModal,
          modalOption,
          setModalOption,
          anchorEl,
          setAnchorEl,
          open,
        }}
      >
        <UserContext.Provider
          value={{
            role,
            setRole,
            userId,
            setUserId,
            userName,
            setUserName,
          }}
        >
          <Navigation />
          <GlobalCss />
          {modal ? <Modal /> : null}
          <Switch>
            <ProtectedRoute path="/:protected" component={Protected} />
            <Route
              exact
              path="/"
              render={(props) => <Entry {...props} />}
            ></Route>
          </Switch>
        </UserContext.Provider>
      </ModalContext.Provider>
    </div>
  );
};

export default App;
