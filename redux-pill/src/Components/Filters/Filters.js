import React, { useState } from "react";
import {
  DatePicker,
  Select,
  Option,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

function Filters() {
  const [value, setValue] = useState({
    type: [],
    condition: "",
    pet: false,
    air_conditioning: false,
    lift: false,
    garden: false,
    swimming_pool: false,
    terrace: false,
  });

  console.log(value);
  const selectedBedRooms = [
    { id: "bed1", text: "1" },
    { id: "bed2", text: "2" },
    { id: "bed3", text: "3" },
    { id: "bed4", text: "4 or +" },
  ];
  const selectedBathRooms = [
    { id: "bath1", text: "1" },
    { id: "bath2", text: "2" },
    { id: "bath3", text: "3" },
    { id: "bath4", text: "4 or +" },
  ];
  const onChange = (event) => {
    // event.detail.selectedOption is a reference to the selected HTML Element
    // dataset contains all attributes that were passed with the data- prefix.
    console.log(event.detail.selectedOption.dataset.id);
  };
  // const handleCheckbox = (e) => {
  //   // console.log(e.target.attributes.value.value);
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     setValue({e.target.attributes.value.value});
  //   }
  // };

  //TODO  make a function that handles type! const types = []
  //& It has to return types array and set it to the value
  return (
    <>
      <h3 className="grid-title">
        <i className="fa fa-filter"></i> Filters
      </h3>
      <div className="filter-box">
        <h6>Type of Home:</h6>
        <div className="checkbox">
          <CheckBox
            text="Flat/Apartment"
            className="checkboxes"
            value="flat/apartment"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ type: e.target.attributes.value.value });
              }
            }}
          />
          <CheckBox
            value="house"
            text="House"
            className="checkboxes"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ type: e.target.attributes.value.value });
              }
            }}
          />
          <CheckBox
            value="duplex"
            text="Duplex"
            className="checkboxes"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ type: e.target.attributes.value.value });
              }
            }}
          />
          <CheckBox
            value="penthouse"
            text="Penthouse"
            className="checkboxes"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ type: e.target.attributes.value.value });
              }
            }}
          />
        </div>
      </div>
      <div className="filter-box">
        <h6>Condition:</h6>
        <div className="checkbox">
          <CheckBox
            text="New homes"
            className="checkboxes"
            value="new"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ condition: e.target.attributes.value.value });
              }
            }}
          />
          <CheckBox
            text="Good condition"
            className="checkboxes"
            value="good"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ condition: e.target.attributes.value.value });
              }
            }}
          />
          <CheckBox
            text="Needs renovation"
            className="checkboxes"
            value="need-renovation"
            onChange={(e) => {
              if (e.target.checked) {
                setValue({ condition: e.target.attributes.value.value });
              }
            }}
          />
        </div>
      </div>
      <div className="filter-box">
        <h6>Bedrooms:</h6>
        <Select onChange={onChange}>
          {selectedBedRooms.map((item) => (
            <Option key={item.id} data-id={item.id}>
              {item.text}
            </Option>
          ))}
        </Select>
      </div>
      <div className="filter-box">
        <h6>Bathrooms:</h6>
        <Select onChange={onChange}>
          {selectedBathRooms.map((item) => (
            <Option key={item.id} data-id={item.id}>
              {item.text}
            </Option>
          ))}
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
          <CheckBox
            text="Pets allowed"
            onChange={(e) => setValue({ pet: e.target.checked })}
            value={value.pet}
          />
          <CheckBox
            text="Air conditioning"
            onChange={(e) => setValue({ air_conditioning: e.target.checked })}
            value={value.air_conditioning}
          />
          <CheckBox
            text="Lift"
            onChange={(e) => setValue({ lift: e.target.checked })}
            value={value.lift}
          />
          <CheckBox
            text="Garden"
            onChange={(e) => setValue({ garden: e.target.checked })}
            value={value.garden}
          />
          <CheckBox
            text="Swimming pool"
            onChange={(e) => setValue({ swimming_pool: e.target.checked })}
            value={value.swimming_pool}
          />
          <CheckBox
            text="Terrace"
            onChange={(e) => setValue({ terrace: e.target.checked })}
            value={value.terrace}
          />
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
            placeholder="Search by city..."
          />
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
