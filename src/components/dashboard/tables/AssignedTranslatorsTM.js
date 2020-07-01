import React from "react";
import { Visibility } from "@material-ui/icons";
import "../tables/Tables.css";

function createData(pageName, lang, status, assigned, deadline, view) {
  return { pageName, lang, status, assigned, deadline, view };
}

const rows = [
  createData("Homepage", "IT", "Open", "09.05.2020", "01.08.2020"),
  createData("Homepage", "DE", "Open", "09.05.2020", "01.08.2020"),
  createData("About", "IT", "Closed", "11.04.2020", "23.04.2020"),
  createData("About", "DE", "Closed", "11.04.2020", "23.04.2020"),
  createData("About", "FR", "Closed", "11.04.2020", "23.04.2020"),
];

const AssignedTranslatorsTM = () => {
  return (
    <>
      <div className="assigned-trans-TM table-grid header">
        <div>Page Name</div>
        <div>Lang</div>
        <div>Status</div>
        <div>Assigned</div>
        <div>Deadline</div>
        <div>View</div>
      </div>
      {rows.map((item) => (
        <div className="table-grid assigned-trans-TM" key={item.pageName}>
          <div>{item.pageName}</div>
          <div>{item.lang}</div>
          <div>{item.status}</div>
          <div>{item.assigned}</div>
          <div>{item.deadline}</div>
          <div className="center">
            <Visibility />
          </div>
        </div>
      ))}
    </>
  );
};

export default AssignedTranslatorsTM;
