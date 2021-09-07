import React from "react";
import "./styles.css";

function FilterPage() {
  return (
    // <form>
    //   <div className="container-md formContainer">
    //     <div className="row">
    //       <div className="col-4">
    //         <input type="text" className="form-control mb-3"></input>
    //       </div>
    //       <div className="d-flex flex-column ">
    //         <div className="col-4 d-flex flex-column">
    //           <h6>Type of Home</h6>
    //           <div className="d-flex flex-column mr-3">
    //             <div className="d-flex">
    //               <div className="d-flex">
    //                 <div className="checkboxContainer">
    //                   <input
    //                     className="form-check-input checkbox"
    //                     type="checkbox"
    //                     value=""
    //                     id="flexCheckDefault"
    //                   ></input>
    //                   <label
    //                     className="form-check-label"
    //                     for="flexCheckDefault"
    //                   >
    //                     Default checkbox
    //                   </label>
    //                 </div>
    //                 <div className="checkboxContainer">
    //                   <input
    //                     className="form-check-input checkbox"
    //                     type="checkbox"
    //                     value=""
    //                     id="flexCheckDefault"
    //                   ></input>
    //                   <label
    //                     className="form-check-label"
    //                     for="flexCheckDefault"
    //                   >
    //                     Default checkbox
    //                   </label>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="d-flex flex-column mr-3">
    //             <div className="d-flex">
    //               <input
    //                 className="form-check-input checkbox"
    //                 type="checkbox"
    //                 value=""
    //                 id="flexCheckDefault"
    //               ></input>
    //               <label className="form-check-label" for="flexCheckDefault">
    //                 Default checkbox
    //               </label>
    //               <input
    //                 className="form-check-input checkbox"
    //                 type="checkbox"
    //                 value=""
    //                 id="flexCheckDefault"
    //               ></input>
    //               <label className="form-check-label" for="flexCheckDefault">
    //                 Default checkbox
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-3 d-flex flex-column">
    //           <h6>Type of Home</h6>
    //           <input
    //             className="form-check-input checkbox"
    //             type="checkbox"
    //             value=""
    //             id="flexCheckDefault"
    //           ></input>
    //           <label className="form-check-label" for="flexCheckDefault">
    //             Default checkbox
    //           </label>
    //           <input
    //             className="form-check-input checkbox"
    //             type="checkbox"
    //             value=""
    //             id="flexCheckDefault"
    //           ></input>
    //           <label className="form-check-label" for="flexCheckDefault">
    //             Default checkbox
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="grid-title">
                    <i className="fa fa-filter"></i> Filters
                  </h2>
                  <hr></hr>
                  <h4>By category:</h4>
                  <div className="checkbox">
                    <input type="checkbox" className="icheck" />
                    <label> Application</label>
                  </div>
                  <div className="padding"></div>
                  <h4>By date:</h4>
                  From
                  <div
                    className="input-group date form_date"
                    data-date="2014-06-14T05:25:07Z"
                    data-date-format="dd-mm-yyyy"
                    data-link-field="dtp_input1"
                  >
                    <input type="text" className="form-control"></input>
                    <span className="input-group-addon bg-blue">
                      <i className="fa fa-th"></i>
                    </span>
                  </div>
                  <input type="hidden" id="dtp_input1" value=""></input>
                  To
                  <div
                    className="input-group date form_date"
                    data-date="2014-06-14T05:25:07Z"
                    data-date-format="dd-mm-yyyy"
                    data-link-field="dtp_input2"
                  >
                    <input type="text" className="form-control"></input>
                    <span className="input-group-addon bg-blue">
                      <i className="fa fa-th"></i>
                    </span>
                  </div>
                  <input type="hidden" id="dtp_input2" value=""></input>
                  <div className="padding"></div>
                  <h4>By price:</h4>
                  Between <div id="price1">$300</div> to{" "}
                  <div id="price2">$800</div>
                  <div className="slider-primary">
                    <div className="slider slider-horizontal sliderClass">
                      <div className="slider-track">
                        <div className="slider-selection sliderSelectionClass"></div>
                        <div className="slider-handle round sliderHandler1"></div>
                        <div className="slider-handle round sliderHandler2"></div>
                      </div>
                      <div className="tooltip top hide toolTipClass">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner">300 : 800</div>
                      </div>
                      <input
                        type="text"
                        className="slider"
                        value=""
                        data-slider-min="0"
                        data-slider-max="1000"
                        data-slider-step="1"
                        data-slider-value="[300,800]"
                        data-slider-tooltip="hide"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <h2>
                    <i className="fa fa-file-o"></i> Result
                  </h2>
                  <hr></hr>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value="web development"
                    ></input>
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>

                  <p>Showing all results matching "web development"</p>

                  <div className="padding"></div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Order by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="#">Name</a>
                          </li>
                          <li>
                            <a href="#">Date</a>
                          </li>
                          <li>
                            <a href="#">View</a>
                          </li>
                          <li>
                            <a href="#">Rating</a>
                          </li>
                        </ul>
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

                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td className="number text-center">1</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/FF8C00"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 1</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$350</td>
                        </tr>
                        <tr>
                          <td className="number text-center">2</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/5F9EA0"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 2</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$1,050</td>
                        </tr>
                        <tr>
                          <td className="number text-center">3</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 3</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$550</td>
                        </tr>
                        <tr>
                          <td className="number text-center">4</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/8A2BE2"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 4</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$330</td>
                        </tr>
                        <tr>
                          <td className="number text-center">5</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 5</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </span>
                          </td>
                          <td className="price text-right">$540</td>
                        </tr>
                        <tr>
                          <td className="number text-center">6</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/6495ED"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 6</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$870</td>
                        </tr>
                        <tr>
                          <td className="number text-center">7</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/DC143C"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 7</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$620</td>
                        </tr>
                        <tr>
                          <td className="number text-center">8</td>
                          <td className="image">
                            <img
                              src="https://via.placeholder.com/400x300/9932CC"
                              alt=""
                            ></img>
                          </td>
                          <td className="product">
                            <strong>Product 8</strong>
                            <br></br>This is the product description.
                          </td>
                          <td className="rate text-right">
                            <span>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td className="price text-right">$1,550</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

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
