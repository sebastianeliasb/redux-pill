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
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="grid search">
            <div class="grid-body">
              <div class="row">
                <div class="col-md-3">
                  <h2 class="grid-title">
                    <i class="fa fa-filter"></i> Filters
                  </h2>
                  <hr></hr>
                  <h4>By category:</h4>
                  <div class="checkbox">
                    <input type="checkbox" class="icheck"></input>
                    <label> Application</label>
                  </div>
                  <div class="padding"></div>
                  <h4>By date:</h4>
                  From
                  <div
                    class="input-group date form_date"
                    data-date="2014-06-14T05:25:07Z"
                    data-date-format="dd-mm-yyyy"
                    data-link-field="dtp_input1"
                  >
                    <input type="text" class="form-control"></input>
                    <span class="input-group-addon bg-blue">
                      <i class="fa fa-th"></i>
                    </span>
                  </div>
                  <input type="hidden" id="dtp_input1" value=""></input>
                  To
                  <div
                    class="input-group date form_date"
                    data-date="2014-06-14T05:25:07Z"
                    data-date-format="dd-mm-yyyy"
                    data-link-field="dtp_input2"
                  >
                    <input type="text" class="form-control"></input>
                    <span class="input-group-addon bg-blue">
                      <i class="fa fa-th"></i>
                    </span>
                  </div>
                  <input type="hidden" id="dtp_input2" value=""></input>
                  <div class="padding"></div>
                  <h4>By price:</h4>
                  Between <div id="price1">$300</div> to{" "}
                  <div id="price2">$800</div>
                  <div class="slider-primary">
                    <div class="slider slider-horizontal sliderClass">
                      <div class="slider-track">
                        <div class="slider-selection sliderSelectionClass"></div>
                        <div class="slider-handle round sliderHandler1"></div>
                        <div class="slider-handle round sliderHandler2"></div>
                      </div>
                      <div
                        class="tooltip top hide toolTipClass"
                      >
                        <div class="tooltip-arrow"></div>
                        <div class="tooltip-inner">300 : 800</div>
                      </div>
                      <input
                        type="text"
                        class="slider"
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

                <div class="col-md-9">
                  <h2>
                    <i class="fa fa-file-o"></i> Result
                  </h2>
                  <hr></hr>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      value="web development"
                    ></input>
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>

                  <p>Showing all results matching "web development"</p>

                  <div class="padding"></div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Order by <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
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

                    <div class="col-md-6 text-right">
                      <div class="btn-group">
                        <button type="button" class="btn btn-default active">
                          <i class="fa fa-list"></i>
                        </button>
                        <button type="button" class="btn btn-default">
                          <i class="fa fa-th"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td class="number text-center">1</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/FF8C00"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 1</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$350</td>
                        </tr>
                        <tr>
                          <td class="number text-center">2</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/5F9EA0"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 2</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$1,050</td>
                        </tr>
                        <tr>
                          <td class="number text-center">3</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 3</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-o"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$550</td>
                        </tr>
                        <tr>
                          <td class="number text-center">4</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/8A2BE2"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 4</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$330</td>
                        </tr>
                        <tr>
                          <td class="number text-center">5</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 5</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </span>
                          </td>
                          <td class="price text-right">$540</td>
                        </tr>
                        <tr>
                          <td class="number text-center">6</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/6495ED"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 6</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$870</td>
                        </tr>
                        <tr>
                          <td class="number text-center">7</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/DC143C"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 7</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$620</td>
                        </tr>
                        <tr>
                          <td class="number text-center">8</td>
                          <td class="image">
                            <img
                              src="https://via.placeholder.com/400x300/9932CC"
                              alt=""
                            ></img>
                          </td>
                          <td class="product">
                            <strong>Product 8</strong>
                            <br></br>This is the product description.
                          </td>
                          <td class="rate text-right">
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-o"></i>
                            </span>
                          </td>
                          <td class="price text-right">$1,550</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <ul class="pagination">
                    <li class="disabled">
                      <a href="#">«</a>
                    </li>
                    <li class="active">
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
