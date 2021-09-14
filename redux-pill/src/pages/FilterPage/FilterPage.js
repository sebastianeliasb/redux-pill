import React, { useEffect, useState } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllProperties } from "../../redux/search/action";
import { buildParamsURL } from "../../utils/stringSetter";

import withLayout from "../../hoc/withLayout";
import TableHeader from "../../Components/TableHeader";
import TableEntry from "../../Components/TableEntry";
import Filters from "../../Components/Filters";

import { Table } from "@ui5/webcomponents-react";

function FilterPage() {
  const allProperties = useSelector((state) => state.search.allProperties);
  const searched = useSelector((state) => state.search.properties);
  const filterState = useSelector((state) => state.filters.state);
  const properties = useSelector((state) => state.filters.properties);
  const filters = useSelector((state) => state.filters);
  console.log(properties, "hello filter page");
  console.log(searched, "searched");
  const dispatch = useDispatch();
  // buildParamsURL();
  // console.log(filter, "filter");
  useEffect(() => {
    dispatch(getAllProperties());
  }, [searched]);

  return (
    //Filter Side
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-13">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-12">
                  <Filters
                    allProperties={allProperties}
                    filterState={filterState}
                    searched={searched}
                    filters={filters}
                    properties={properties}
                  />
                  <Table
                    className="tableContainer"
                    columns={
                      <>
                        <TableHeader />
                      </>
                    }
                    onLoadMore={function noRefCheck() {}}
                    onPopinChange={function noRefCheck() {}}
                    onRowClick={function noRefCheck() {}}
                    onSelectionChange={function noRefCheck() {}}
                  >
                    {properties.length !== 0
                      ? properties.map((item) => {
                          return <TableEntry item={item} />;
                        })
                      : searched.length !== 0
                      ? searched.map((item) => {
                          return <TableEntry item={item} />;
                        })
                      : allProperties.map((item) => {
                          return <TableEntry item={item} />;
                        })}
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

export default withLayout(FilterPage);
