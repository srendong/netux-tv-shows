import React from "react";
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

const NavbarPage = ({ state, onClick }) => {
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
              <MDBFormInline waves>
                <div className="md-form my-0 text-center">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
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
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-inline">Genres</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
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
