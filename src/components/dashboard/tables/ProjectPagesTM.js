import React from "react";
import { Visibility } from "@material-ui/icons";
import "../tables/Tables.css";
var uniqid = require('uniqid');

const ProjectPagesTM = ( {projectpages}) => {
  return (
    <>
      <div className="project-pages-TM table-grid header">
        <div>Page Name</div>
        <div>Description</div>
        <div>View</div>
      </div>
      {projectpages &&
        projectpages.map((page) => (
        <div className="table-grid project-pages-TM" key={uniqid()}>
          <div>{page.pagename}</div>
          <div>{page.description}</div>
          <div className="center">
            <Visibility />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectPagesTM;
