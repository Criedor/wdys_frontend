import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Sidebar from "./sidebar/Sidebar";
import CrumbsAction from "./crumbsAction/CrumbsAction";
import ProjectDetailsPage from "./projectDetailsPage/ProjectsDetailsPage";
import TranslatorCreate from "./translatorCreate/TranslatorCreate";
import TranslatorDetails from "./translatorDetail/TranslatorDetails";
import ProjectEdit from "./projectEdit/projectEdit";
import ProjectCreate from "./projectCreate/ProjectCreate";
import ProjectDetailsPageEdit from "./projectDetailsPageEdit/projectDetailsPageEdit";
import ProjectDetails from "./projectDetails/ProjectDetails";
import Projects from "./project/Projects";
import Translation from "./translation/Translation";
import Compare from "./compare/Compare";

import "./Dashboard.css";

// Theme to control the width of the styling of the MUI componets found in components/dashboard/selectFields directory
const inputTheme320 = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: 320,
      },
    },
  },
});

const inputTheme500 = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: 500,
      },
    },
  },
});

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-body">
        <CrumbsAction />
        <Switch>
          <Route
            exact
            path="/translators/create"
            render={(props) => (
              <ThemeProvider theme={inputTheme500}>
                <TranslatorCreate {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/create"
            render={(props) => (
              <ThemeProvider theme={inputTheme500}>
                <ProjectCreate {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/:projID/update"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectEdit {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/:projID/:basePageID/update"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetailsPageEdit {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/:projID/:basePageID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetailsPage {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/translators/:userID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <TranslatorDetails {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/translators/:userID/:pageID"
            render={(props) => <Compare {...props} />}
          />

          <Route
            exact
            path="/projects/:projID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetails {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/translators"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Projects {...props} />
              </ThemeProvider>
            )}
          />
          <Route
            exact
            path="/projects"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Projects {...props} />
              </ThemeProvider>
            )}
          />
          <Route
            exact
            path="/translation"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Translation {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/translation/:pageID"
            render={(props) => <Compare {...props} />}
          /> 
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
