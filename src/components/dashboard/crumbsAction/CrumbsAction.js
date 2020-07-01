import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import "./CrumbsAction.css";

const CrumbsAction = () => {
  let matchProjectPage = useRouteMatch("/projects/:projID/:basePageID");
  let matchProjectUpdate = useRouteMatch("/projects/:projID/update");
  let matchTranslatorCreate = useRouteMatch("/translators/create");
  let matchProjectCreate = useRouteMatch("/projects/create");
  let matchTranslator = useRouteMatch("/translators");
  let matchTranslation = useRouteMatch("/translation");
  let matchProjects = useRouteMatch("/projects");

  const handleAddButtonLink = () => {
    if (matchProjects) {
      return "/projects/create";
    } else if (matchTranslator) {
      return "/translators/create";
    }
  };

  return (
    <div className="body-head">
      {matchProjectCreate || matchTranslatorCreate || matchTranslation? null : (
        <>
          <Breadcrumbs />
          <Link to={handleAddButtonLink} style={{ textDecoration: "none" }}>
            {matchProjectUpdate || matchProjectPage ? null : (
              <div className="add-button">+</div>
            )}
          </Link>
        </>
      )}
    </div>
  );
};

export default CrumbsAction;
