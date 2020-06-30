import React from "react";
import "../tables/Tables.css";

function createData(pageName, description, view) {
  return { pageName, description, view };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

const AssignedTranslatorsTM = () => {
  return (
    <>
      <div className="assigned-trans-TM header">
        <div>Page Name</div>
        <div>Description</div>
        <div>View</div>
      </div>
      {rows.map((item) => (
        <div className="assigned-trans-TM" key={item.pageName}>
          <div>{item.pageName}</div>
          <div>{item.description}</div>
          <div>{item.view}</div>
        </div>
      ))}
    </>
  );
};

export default AssignedTranslatorsTM;
