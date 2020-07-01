import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "../cards/Card.css";
import "../tables/Tables.css";
import "../Dashboard.css"
import "./Translation.css"

function createData(pageName, status, assigned, due, view) {
  return { pageName, status, assigned, due, view };
}

const rows = [
  createData("Frozen yoghurt", "open", "2020/07/07", "7 Days", "X"),
  createData("Ice cream sandwich", "review", "2020/07/07", "7 Days", "X"),
  createData("Eclair", "open", "2020/07/07", "7 Days", "X"),
  createData("Cupcake", "done", "2020/06/07", "done", "X"),
  createData("Gingerbread", "done", "2020/06/07", "done", "X"),
];

const Translation = () => {
  
  return (
    <div className="body-translation">
      <div>
        <div className="title-gray">
            Assigned Projects
        </div>
        <div className="assigned-proj-TR header">
          <div>Page Name</div>
          <div>Status</div>
          <div>Assigned</div>
          <div>Due</div>
          <div>View</div>
        </div>
        {rows.map((item) => (
          <div className="assigned-proj-TR" key={item.pageName}>
            <div>{item.pageName}</div>
            <div>{item.status}</div>
            <div>{item.assigned}</div>
            <div>{item.due}</div>
            <div>{item.view}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="title-gray">
            Page Details
        </div>
        <div className="card-translation ">
          <div className="card-top green">
             Page Name
          </div>
          <div className="card-bottom ">
            <div className="page-info">
              Translate form:<strong> BASELANG</strong>
            </div>
            <div className="page-info">
              To:<strong> TRANSLATION LANG</strong>
            </div>
            <div className="page-info">
              Assigned on: <strong>ASSIGNED DATE</strong>
            </div>
            <div className="page-info">           
              Due by: <strong>DATE DATE </strong>
            </div>
            <div className="page-info">
              Link: <a className="page-info-link" href="DATA:PAGE_URL" alt="GIVE ME A NAME"><strong> PAGE URL</strong></a>
            </div>
            <div className="page-info">
              Status: <strong>STATUS</strong>
            </div>
            <div className="page-info">
              Descritpion
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="translation-button">
              <Link to={`${useRouteMatch().url}/${"TRANSLATIONPAGE_ID"}`}>
                <button className="blue action ">REVIEW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translation;