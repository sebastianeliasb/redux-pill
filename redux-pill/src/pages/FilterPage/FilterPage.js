import React from "react";
import "./styles.css";
import {
  DatePicker,
  Table,
  TableCell,
  TableRow,
  TableColumn,
  Label,
  Select,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
  Badge,
} from "@ui5/webcomponents-react";

function FilterPage() {
  return (
    //Filter Side
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-13">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="grid-title">
                    <i className="fa fa-filter"></i> Filters
                  </h3>
                  <div className="filter-box">
                    <h6>Type of Home:</h6>
                    <div className="checkbox">
                      <CheckBox text="Flat/Apartment" className="checkboxes" />
                      <CheckBox text="House" className="checkboxes" />
                      <CheckBox text="Duplex" className="checkboxes" />
                      <CheckBox text="Penthouse" className="checkboxes" />
                    </div>
                  </div>
                  <div className="filter-box">
                    <h6>Condition:</h6>
                    <div className="checkbox">
                      <CheckBox text="New homes" className="checkboxes" />
                      <CheckBox text="Good condition" className="checkboxes" />
                      <CheckBox
                        text="Needs renovation"
                        className="checkboxes"
                      />
                    </div>
                  </div>
                  <div className="filter-box">
                    <h6>Bedrooms:</h6>
                    <Select>
                      <option>1</option>
                      <option>3</option>
                      <option>3</option>
                      <option>4 or +</option>
                    </Select>
                  </div>
                  <div className="filter-box">
                    <h6>Bathrooms:</h6>
                    <Select>
                      <option>1</option>
                      <option>2</option>
                      <option>3 or +</option>
                    </Select>
                  </div>
                  <div className="filter-box">
                    <h6>Price Range:</h6>
                    <RangeSlider
                      className="slider"
                      min="50000"
                      max="500000"
                      showTooltip="true"
                      startValue="150000"
                      endValue="500000"
                      step="50000"
                    />
                  </div>
                  <div className="filter-box">
                    <h6>Publication date:</h6>
                    <DatePicker />
                  </div>
                  <div className="filter-box">
                    <h6>More Filters:</h6>
                    <div className="checkbox">
                      <CheckBox text="Pets allowed" />
                      <CheckBox text="Air conditioning" />
                      <CheckBox text="Lift" />
                      <CheckBox text="Garden" />
                      <CheckBox text="Swimming pool" />
                      <CheckBox text="Terrace" />
                    </div>
                  </div>
                  {/* Result Side  */}
                  <div className="col-md-9">
                    <h3>
                      <i className="fa fa-file-o"></i> Results
                    </h3>
                    <hr></hr>
                    <div className="input-group">
                      <Input
                        icon={<Icon name="search" />}
                        className="search-bar"
                        placeholder="Search here..."
                      />
                      <span className="input-group-btn">
                        <button className="btn-search" type="button">
                          Search
                        </button>
                      </span>
                    </div>

                    {/* <p>Showing all results matching {searchResultHere}</p> */}

                    <div className="filter-box">
                      <div className="col-sm-6">
                        <Select className="filterBy">
                          <h6>Order by:</h6>
                          <option>Name</option>
                          <option>Date</option>
                          <option>View</option>
                          <option>Rating</option>
                        </Select>
                      </div>
                    </div>

                    <div className="col-md-6 text-right">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-default active"
                        >
                          <i className="fa fa-list"></i>
                        </button>
                        <button type="button" className="btn btn-default">
                          <i className="fa fa-th"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Table
                    className="tableContainer"
                    columns={
                      <>
                        <TableColumn style={{ width: "12rem" }}>
                          <Label>Image</Label>
                        </TableColumn>
                        <TableColumn
                          minWidth={200}
                          style={{ width: "12rem" }}
                          popinText="Address"
                        >
                          <Label>Address</Label>
                        </TableColumn>
                        <TableColumn
                          demandPopin
                          style={{ width: "8rem" }}
                          popinText="Price"
                        >
                          <Label>Price</Label>
                        </TableColumn>
                        <TableColumn
                          demandPopin
                          minWidth={600}
                          style={{ width: "12rem" }}
                          popinText="Special Features"
                        >
                          <Label>Special Features</Label>
                        </TableColumn>
                        <TableColumn
                          minWidth={600}
                          style={{ width: "12rem" }}
                          popinText="Characteristics"
                        >
                          <Label>Characteristics</Label>
                        </TableColumn>
                      </>
                    }
                    onLoadMore={function noRefCheck() {}}
                    onPopinChange={function noRefCheck() {}}
                    onRowClick={function noRefCheck() {}}
                    onSelectionChange={function noRefCheck() {}}
                  >
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
                            <span className="badge bg-secondary rounded-pill">
                              2
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Bath
                            <span className="badge bg-secondary rounded-pill">
                              1
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Size
                            <span className="badge bg-secondary rounded-pill">
                              67
                            </span>
                          </li>
                        </ul>
                      </TableCell>
                    </TableRow>
                  </Table>
                  <ul className="pagination">
                    <li className="disabled">
                      <a href="#">«</a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">»</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
