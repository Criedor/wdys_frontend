import React from "react";
import {Link, useParams} from 'react-router-dom'
import { Visibility } from "@material-ui/icons";
import { ReactComponent as AddPage } from './add-page.svg'
import "../tables/Tables.css";
var uniqid = require('uniqid');

const ProjectPagesTM = ( {projectpages}) => {

  const { projID } = useParams();
  return (
    <>
      {projectpages && projectpages.length>0?
      <div className="project-pages-TM table-grid header">
        <div>Page Name</div>
        <div>Description</div>
        <div>View</div>
      </div>
      :
      <div className="no-table">
        <AddPage style={{maxWidth: '400px'}}/>
        <p>
          To create a new page for this project, navigate to the URL of the page you want to add. 
          Start the &#123; wdys &#125; chrome extension, select this project's name and take a snapshot!

          Then come back her to see the list of your project pages.
        </p>
      </div>}
      {projectpages &&
        projectpages.map((page) => (
        <div className="table-grid project-pages-TM" key={uniqid()}>
          <div>{page.pagename}</div>
          <div>{page.description}</div>
          <div className="center">
            <Link to={`${projID}/${page._id}`}>
              <Visibility />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectPagesTM;
