import React from "react";
import { Visibility } from "@material-ui/icons";
import "../tables/Tables.css";

function createData(lang, translator, assigned, status, view) {
  return { lang, translator, assigned, status, view };
}

const rows = [
  createData("IT", "James Scotch", "09.05.2020", "Open"),
  createData("FR", "James Scotch", "09.05.2020", "Open"),
  createData("DE", "James Scotch", "09.05.2020", "Open"),
  createData("PT", "Joana Lumley", "11.04.2020", "Closed"),
  createData("ES", "Joana Lumley", "11.04.2020", "Closed"),
];

const AssignedTranslatorsTM = () => {
  return (
    <>
      <div className="assigned-trans-TM table-grid header">
        <div>Language</div>
        <div>Translator</div>
        <div>Assigned</div>
        <div>Status</div>
        <div className="center">View</div>
      </div>
      {rows.map((item) => (
        <div className="table-grid assigned-trans-TM" key={item.pageName}>
          <div>{item.lang}</div>
          <div>{item.translator}</div>
          <div>{item.assigned}</div>
          <div>{item.status}</div>
          <div className="center">
            <Visibility />
          </div>
        </div>
      ))}
    </>
  );
};

export default AssignedTranslatorsTM;
