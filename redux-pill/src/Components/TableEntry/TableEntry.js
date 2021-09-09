import React from "react";
import { TableCell, TableRow, Label, Badge } from "@ui5/webcomponents-react";

function TableEntry(item) {
  // img,
  // streetNumber,
  // street,
  // city,
  // province,
  // country,
  // price,
  // pet,
  // lift,
  // garden,
  // air_conditioning,
  // swimming_pool,
  // terrace,
  // room,
  // bath,
  // size,

  console.log(item);
  return (
    <>
      <TableRow>
        <TableCell>
          {/* <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img> */}
          <img src={item.imageURL}></img>
        </TableCell>
        <TableCell>
          <Label className="address">
            10 <br></br>
            {/* {streetNumber} <br></br> */}
            Avinguda Castellví <br></br>
            {/* {street} <br></br> */}
            Molins de Rei <br></br>
            {/* {city} <br></br> */}
            Barcelona Spain
            {/* {province} {country} */}
          </Label>
        </TableCell>
        <TableCell>
          <Label>400000$</Label>
          {/* <Label>{price}$</Label> */}
        </TableCell>
        <TableCell className="tableCell">
          {/* {pet ? <Badge className="mb-1 mt-1" colorScheme={2}>
            Pets allowed
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
            Pets allowed
          </Badge>
          } */}
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Pets allowed
          </Badge>
          {/* {lift ? <Badge className="mb-1 mt-1" colorScheme={2}>
            Lift
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
            Lift
          </Badge>
          } */}
          <Badge className="mb-1" colorScheme={8}>
            Lift
          </Badge>
          {/* {garden ? <Badge className="mb-1 mt-1" colorScheme={2}>
          Garden
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
          Garden
          </Badge>
          } */}
          <Badge className="mb-1" colorScheme={2}>
            Garden
          </Badge>
          {/* {air_conditioning ? <Badge className="mb-1 mt-1" colorScheme={2}>
          Air Conditioning
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
          Air Conditioning
          </Badge>
          } */}
          <Badge className="mb-1" colorScheme={8}>
            Air Conditioning
          </Badge>
          {/* {swimming_pool ? <Badge className="mb-1 mt-1" colorScheme={2}>
          Swimming pool
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
          Swimming pool
          </Badge>
          } */}
          <Badge className="mb-1" colorScheme={2}>
            Swimming pool
          </Badge>
          {/* {terrace ? <Badge className="mb-1 mt-1" colorScheme={2}>
          Terrace
          </Badge> : <Badge className="mb-1 mt-1" colorScheme={8}>
          Terrace
          </Badge>
          } */}
          <Badge className="mb-1" colorScheme={8}>
            Terrace
          </Badge>
        </TableCell>
        <TableCell>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Room
              <span className="badge bg-secondary rounded-pill">2</span>
              {/* <span className="badge bg-secondary rounded-pill">{room}</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bath
              <span className="badge bg-secondary rounded-pill">1</span>
              {/* <span className="badge bg-secondary rounded-pill">{bath}</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Size
              <span className="badge bg-secondary rounded-pill">67</span>
              {/* <span className="badge bg-secondary rounded-pill">{size}</span> */}
            </li>
          </ul>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableEntry;
