import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import CardProjects from "../cards/CardProjects";
import CardTranslators from "../cards/CardTranslators";
import UserContext from "../../../contexts/UserContext";

const Project = () => {
  const matchTranslatorsRoute = useRouteMatch({
    path: "/projects",
  });
  // console.log(matchTranslatorsRoute);
  const { userId, setUserProjects, userProjects, setLangs } = useContext(UserContext);
  return (
    <div className="body-project">
      {matchTranslatorsRoute ? 
      <CardProjects /> 
      : <CardTranslators />}
    </div>
  );
};

export default Project;
