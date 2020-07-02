import React from "react";
import { useRouteMatch } from "react-router-dom";
import CardProjects from "../cards/CardProjects";
import CardTranslators from "../cards/CardTranslators";

const Project = () => {
  const matchTranslatorsRoute = useRouteMatch({
    path: "/projects",
  });
  // console.log(matchTranslatorsRoute);
  return (
    <div className="body-project">
      {matchTranslatorsRoute ? <CardProjects /> : <CardTranslators />}
    </div>
  );
};

export default Project;
