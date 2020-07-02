import React from "react";
import "../cards/Card.css";
import "../tables/Tables.css";
import "../Dashboard.css";
import "./Compare.css";

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

const Compare = () => {
  return (
    <div className="body-compare">
      <div>
        <div className="title-gray title-green  white">
          <div>Page Name</div>
          <div>GER</div>
        </div>
        <div className="compare">
          <div>
            <div className="title-gray">
              <div>Original</div>
            </div>
            <div className="mt1"></div>
            {rows.map((item) => (
              <div className="compare-txt" key={item.pageName}>
                {item.pageName}
              </div>
            ))}
          </div>
          <div>
            <div className="title-gray">
              <div>Translation</div>
            </div>
            <div className="mt1"></div>
            {rows.map((item) => (
              <div className="compare-txt" key={item.pageName}>
                {item.pageName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
