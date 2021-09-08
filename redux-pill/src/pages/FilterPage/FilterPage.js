import React from "react";
import "./styles.css";
import withLayout from "../../hoc/withLayout";
import TableHeader from "../../Components/TableHeader";
import TableEntry from "../../Components/TableEntry";
import Filters from "../../Components/Filters";

import { Table } from "@ui5/webcomponents-react";

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
                  <Filters />
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
                    <TableEntry />
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
