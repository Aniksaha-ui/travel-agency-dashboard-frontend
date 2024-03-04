import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({data}) => {

  const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const rows =data;
  const columns = [...new Set(rows.flatMap(Object.keys))]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((row,index)=> 
            <TableCell className="tableCell">{toCapitalize(row)}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                {Object.keys(row).map((key) => (
                  <TableCell className="tableCell" key={key}>
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
       </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
