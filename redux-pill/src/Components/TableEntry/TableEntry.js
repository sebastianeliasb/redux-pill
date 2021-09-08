import React from "react";
import { TableCell, TableRow, Label, Badge } from "@ui5/webcomponents-react";

function TableEntry() {
  return (
    <>
      <TableRow>
        <TableCell>
          <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img>
        </TableCell>
        <TableCell>
          <Label className="address">
            10 <br></br>Avinguda Castellví <br></br>
            Molins de Rei <br></br>Barcelona Spain
          </Label>
        </TableCell>
        <TableCell>
          <Label>400000$</Label>
        </TableCell>
        <TableCell className="tableCell">
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Pets allowed
          </Badge>
          <Badge className="mb-1" colorScheme={8}>
            Lift
          </Badge>
          <Badge className="mb-1" colorScheme={2}>
            Garden
          </Badge>
          <Badge className="mb-1" colorScheme={8}>
            Air Conditioning
          </Badge>
          <Badge className="mb-1" colorScheme={2}>
            Swimming pool
          </Badge>
          <Badge className="mb-1" colorScheme={8}>
            Terrace
          </Badge>
        </TableCell>
        <TableCell>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Room
              <span className="badge bg-secondary rounded-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bath
              <span className="badge bg-secondary rounded-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Size
              <span className="badge bg-secondary rounded-pill">67</span>
            </li>
          </ul>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableEntry;
