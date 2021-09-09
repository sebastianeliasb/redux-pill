import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { Input, Icon } from "@ui5/webcomponents-react";

import { getSearchedPropertiesByCity } from "../../redux/search/action";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [text, setText] = useState("");
  const searched = useSelector((state) => state.search.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchedPropertiesByCity(text));
  }, []);

  const url = useLocation();

  const handleClick = () => setClick(!click);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedPropertiesByCity(text));
  };

  const handelChange = (e) => {
    setText(e.target.value);
  };
  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSearch = (e) => {
    dispatch(getSearchedPropertiesByCity(text));
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
            DreamHouse
            <i className="fas fa-home" />
          </Link>
        </div>
        {url.pathname === "/filter-page" ? null : (
          <form onSubmit={handleSubmit}>
            <Input
              icon={
                <Link
                  to={{
                    pathname: "/filter-page",
                    query: { searched: searched },
                  }}
                  className="nav-links"
                  onClick={closeMobilMenu}
                >
                  <Icon name="search" onClick={handleSearch} />
                </Link>
              }
              className="search-bar"
              placeholder="Search by city..."
              onChange={handelChange}
            />
          </form>
        )}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/filter-page"
              className="nav-links"
              onClick={closeMobilMenu}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
              Sign In
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </nav>
    </>
  );
}

export default Navbar;
