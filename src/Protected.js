import React from "react";
import { Switch, Route } from "react-router-dom";
// import ModalContext from "./contexts/ModalContext";
import Dashboard from "./components/dashboard/Dashboard";
import "./components/dashboard/Dashboard";

const Protected = () => {
//   const { modal } = useContext(ModalContext);

  return (
    <>
      <Switch>
        {/* Translation Manager's Translators section */}

        <Route
          path="/translators"
          render={(props) => <Dashboard {...props} />}
        />

        {/* Translation Manager's Projects section */}

        <Route path="/projects" render={(props) => <Dashboard {...props} />} />

        {/* Translator's section */}
        <Route
          path="/translation"
          render={(props) => <Dashboard {...props} />}
        />
      </Switch>
    </>
  );
};

export default Protected;
