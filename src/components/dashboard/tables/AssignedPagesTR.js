import React from "react";
import { Visibility } from "@material-ui/icons";
import "../tables/Tables.css";

function createData(pageName, description, view) {
  return { pageName, description, view };
}

const rows = [
  createData("Test", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

const AssignedPagesTR = () => {
  return (
    <>
      <div className="project-pages-TM table-grid header">
        <div>Page Name</div>
        <div>Description</div>
        <div>View</div>
      </div>
      {rows.map((item) => (
        <div className="table-grid project-pages-TM" key={item.pageName}>
          <div>{item.pageName}</div>
          <div>{item.description}</div>
          <div className="center">
            <Visibility />
          </div>
        </div>
      ))}
    </>
  );
};

export default AssignedPagesTR;
