import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  root: {
    fontSize: 16,
    fontFamily: "'Montserrat', sans-serif",
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    height: "50px",
  },
  body: {
    fontSize: 16,
    fontFamily: "'Montserrat', sans-serif",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    height: "80px",
    borderBottomColor: "red",
  },
}))(TableRow);

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

const useStyles = makeStyles({
  table: {
    minWidth: 600,
    marginTop: 20,
    borderLeft: 0,
    borderRadius: 0,
  },
});

const ProjectPagesTM = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Page Name</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.pageName}>
              <StyledTableCell component="th" scope="row">
                {row.pageName}
              </StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.view}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectPagesTM;
