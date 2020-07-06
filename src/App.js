import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Entry from "./components/landingPage/Entry";
import Protected from "./Protected";
import { withStyles } from "@material-ui/core/styles";
import Modal from "./components/modal/Modal";
import ModalContext from "./contexts/ModalContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Axios from "axios";
import "./components/dashboard/Dashboard";
import "./App.css";

const App = () => {
  // State for opening modal Login / Signup
  const [modal, setModal] = useState(null);
  const [modalOption, setModalOption] = useState(1);
  const [modalObject, setModalObject] = useState();
  const [userId, setUserId] = useState();
  const [role, setRole] = useState();
  const [userName, setUserName] = useState();
  const [userProjects, setUserProjects] = useState([]);
  const [langs, setLangs] = useState([{lang: "ger", langname: "German"}]);
  const [projectCounter, setProjectCounter] = useState();
  const [translatorCounter, setTranslatorCounter] = useState();
  const [assignTranslatorTranslationPages, setAssignTranslatorTranslationPages] = useState()
  const [assignTranslatorTranslators, setAssignTranslatorTranslators] = useState()

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

  useEffect(() => {
    if(langs.length <=1){
      Axios
      .get("https://wdys.herokuapp.com/languages", {headers: {'Content-Type':'application/json'}})
      .then((res) => {
        setLangs(res.data.languages);
      })
      .catch((err) => console.log(err))
    }
  }, [langs]);

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
          modalObject, 
          setModalObject,
          translatorCounter, 
          setTranslatorCounter
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
            userProjects,
            setUserProjects, 
            langs,
            setLangs,
            projectCounter,
            setProjectCounter,
            assignTranslatorTranslationPages, 
            setAssignTranslatorTranslationPages,
            assignTranslatorTranslators, 
            setAssignTranslatorTranslators
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
