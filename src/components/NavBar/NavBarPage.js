import React from "react";
import { Link } from "react-router-dom";
//MDB
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { HashRouter as Router } from "react-router-dom";

const NavbarPage = ({ state, onClick, value, handleChange, handleSubmit }) => {
  return (
    <div className="NavBar">
      <header>
        <Router>
          <MDBNavbar
            className="nav"
            // fixed="top"
            dark
            expand="md"
            scrolling
            color="blue-grey darken-4"
          >
            <MDBNavbarBrand href="/home">
              <strong>TV SHOWS</strong>
            </MDBNavbarBrand>
            <MDBNavItem>
              <MDBFormInline waves onSubmit={handleSubmit}>
                <div className="md-form my-0 text-center">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    name="name"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
            <MDBCollapse isOpen={state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink className="link" to="/home">
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="link" to="/popular">
                    Popular
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </header>
    </div>
  );
};

export default NavbarPage;
