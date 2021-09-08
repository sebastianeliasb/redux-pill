import React from "react";
import {
  DatePicker,
  Select,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

function Filters() {
  return (
    <>
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
          <CheckBox text="Needs renovation" className="checkboxes" />
        </div>
      </div>
      <div className="filter-box">
        <h6>Bedrooms:</h6>
        <Select>
          <option>1</option>
          <option>2</option>
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
          <i className="fas fa-poll-h"></i> Results
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
            <button type="button" className="btn btn-default active">
              <i className="fa fa-list"></i>
            </button>
            <button type="button" className="btn btn-default">
              <i className="fa fa-th"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
