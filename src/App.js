import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Navigation from "./components/navigation/Navigation";
import Entry from "./components/Entry";
import Modal from "./components/modal/Modal";
import Dashboard from "./components/dashboard/Dashboard";
import ModalContext from "./contexts/ModalContext";
import "./components/dashboard/Dashboard";
import "./App.css";

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

const App = () => {
  // State for opening modal Login / Signup
  const [modal, setModal] = useState(null);
  const [modalOption, setModalOption] = useState(1);

  // State to Open/Close the Edit/Delete popover menu
  const [anchorEl, setAnchorEl] = useState(null);

  // const variable to
  const open = Boolean(anchorEl);

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
        <Navigation />
        <GlobalCss />
        {modal ? <Modal /> : null}
        <Switch>
          {/* Translation Manager's Translators section */}
          <Route
            path="/translators"
            render={(props) => <Dashboard {...props} />}
          />

          {/* Translation Manager's Projects section */}
          <Route
            path="/projects"
            render={(props) => <Dashboard {...props} />}
          />
          
          {/* Translator's section */}
          <Route
            path="/translation"
            render={(props) => <Dashboard {...props} />}
          />

          {/* Entry page */}

          <Route
            exact
            path="/"
            render={(props) => <Entry {...props} />}
          ></Route>
        </Switch>
      </ModalContext.Provider>
    </div>
  );
};

export default App;
