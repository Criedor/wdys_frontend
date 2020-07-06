import React from "react";
import { Link } from "react-router-dom";
import { Visibility } from "@material-ui/icons";
import "../tables/Tables.css";
let uniqid = require('uniqid');

const AssignedTranslatorsTM = ({translators, translationpages}) => {
  console.log(translationpages)
  console.log(translators)
  return (
    <>
      <div className="assigned-trans-TM table-grid header">
        <div>Language</div>
        <div>Translator</div>
        <div>Status</div>
        <div className="center">View</div>
      </div>
      {translationpages &&
      translationpages.map((page) => (
        <div className="table-grid assigned-trans-TM" key={uniqid()}>
          <div>{page.lang}</div>
          <div>{translators.filter(translator => 
            page.translator_id === translator._id).length !== 1?`not assigned`
            : 
            translators.filter(translator => 
            page.translator_id === translator._id)[0].displayname}
            </div>
          <div>{page.status}</div>
          <div className="center">
            <Link to={`/projects/${page._id}/${page.base_page_id}/compare`} >
              <Visibility />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default AssignedTranslatorsTM;
