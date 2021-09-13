import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DatePicker,
  Select,
  Option,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

import { getFilteredProperties } from "../../redux/filter/action";

function Filters({ allProperties, filterState, searched }) {
  const dispatch = useDispatch();
  // const properties = useSelector((state) => state.search.allProperties);

  console.log(allProperties, "ALL PROPERTIES");
  const state = filterState;
  console.log(state, "hello filters");
  // const [value, setValue] = useState({
  //   type: "",
  //   condition: "",
  //   room: 0,
  //   bath: 0,
  //   size: 0,
  //   price: 0,
  //   pet: false,
  //   lift: false,
  //   garden: false,
  //   air_conditioning: false,
  //   swimming_pool: false,
  //   terrace: false,
  //   filter: [],
  // });
  // useEffect(() => {
  //   dispatch(getFilteredProperties(value));
  // }, [value]);
  useEffect(() => {
    dispatch(getFilteredProperties(state, searched));
  }, [state]);

  // console.log(value, "value");
  const selectedBedRooms = [
    { id: "0", text: "0" },
    { id: "1", text: "1 bedroom" },
    { id: "2", text: "2 bedrooms" },
    { id: "3", text: "3 bedrooms" },
    { id: "4", text: "4 bedrooms" },
    { id: "5", text: "5 bedrooms" },
    { id: "6", text: "6 bedrooms" },
  ];
  const selectedBathRooms = [
    { id: "0", text: "0" },
    { id: "1", text: "1 bathroom" },
    { id: "2", text: "2 bathrooms" },
    { id: "3", text: "3 bathrooms" },
    { id: "4", text: "4 or + bathrooms" },
  ];
  const onChange = (event) => {
    // event.detail.selectedOption is a reference to the selected HTML Element
    // dataset contains all attributes that were passed with the data- prefix.
    console.log(event.detail.selectedOption.dataset.id, "change!!!!!!");
  };
  // console.log(value);
  const handleType = (e) => {
    console.log("type name => ", e.target.name);
    if (e.target.checked) {
      // setValue({
      //   ...value,
      //   type: e.target.attributes.value.value,
      //   filter: [
      //     ...value.filter,
      //     ...allProperties.filter(
      //       (item) => item.type === e.target.attributes.value.value
      //     ),
      //   ],
      // });
    } else {
      // let newValue = {
      //   ...value,
      //   type: "",
      //   filter: [
      //     ...value.filter.filter(
      //       (item) => item.type !== e.target.attributes.value.value
      //     ),
      //   ],
      // };
      // setValue(newValue);
    }
    // dispatch(getFilteredProperties(value));
  };

  const handleCondition = (e) => {
    if (e.target.checked) {
      // setValue({
      //   ...value,
      //   condition: e.target.attributes.value.value,
      //   filter: [
      //     ...value.filter,
      //     ...allProperties.filter(
      //       (item) => item.condition === e.target.attributes.value.value
      //     ),
      //   ],
      // });
    } else {
      // let newValue = {
      //   ...value,
      //   condition: "",
      //   filter: [
      //     ...value.filter.filter(
      //       (item) => item.condition !== e.target.attributes.value.value
      //     ),
      //   ],
      // };
      // setValue(newValue);
    }
  };

  const handleBedrooms = (e) => {
    console.log(e.detail.selectedOption.dataset.id, "change!!!!!!");
    // setValue({
    //   ...value,
    //   room: e.detail.selectedOption.dataset.id,
    //   filter: [
    //     ...allProperties.filter(
    //       (item) => item.room == e.detail.selectedOption.dataset.id
    //     ),
    //   ],
    // });
  };

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
            name="flat/apartment"
            value="flat/apartment"
            onChange={handleType}
          />
          <CheckBox
            value="house"
            text="House"
            className="checkboxes"
            onChange={handleType}
          />
          <CheckBox
            value="duplex"
            text="Duplex"
            className="checkboxes"
            onChange={handleType}
          />
          <CheckBox
            value="penthouse"
            text="Penthouse"
            className="checkboxes"
            onChange={handleType}
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
            onChange={handleCondition}
          />
          <CheckBox
            text="Good condition"
            className="checkboxes"
            value="good"
            onChange={handleCondition}
          />
          <CheckBox
            text="Needs renovation"
            className="checkboxes"
            value="reform"
            onChange={handleCondition}
          />
        </div>
      </div>
      <div className="filter-box">
        <h6>Bedrooms:</h6>
        <Select onChange={handleBedrooms}>
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
            // onChange={(e) => setValue({ pet: e.target.checked })}
            // value={value.pet}
            // onChange={(e) => setValue({ pet: e.target.checked })}
            // value={value.pet}
          />
          <CheckBox
            text="Air conditioning"
            // onChange={(e) => setValue({ air_conditioning: e.target.checked })}
            // value={value.air_conditioning}
            // onChange={(e) => setValue({ air_conditioning: e.target.checked })}
            // value={value.air_conditioning}
          />
          <CheckBox
            text="Lift"
            // onChange={(e) => setValue({ lift: e.target.checked })}
            // value={value.lift}
            // onChange={(e) => setValue({ lift: e.target.checked })}
            // value={value.lift}
          />
          <CheckBox
            text="Garden"
            // onChange={(e) => setValue({ garden: e.target.checked })}
            // value={value.garden}
            // onChange={(e) => setValue({ garden: e.target.checked })}
            // value={value.garden}
          />
          <CheckBox
            text="Swimming pool"
            // onChange={(e) => setValue({ swimming_pool: e.target.checked })}
            // value={value.swimming_pool}
            // onChange={(e) => setValue({ swimming_pool: e.target.checked })}
            // value={value.swimming_pool}
          />
          <CheckBox
            text="Terrace"
            // onChange={(e) => setValue({ terrace: e.target.checked })}
            // value={value.terrace}
            // onChange={(e) => setValue({ terrace: e.target.checked })}
            // value={value.terrace}
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
