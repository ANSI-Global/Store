import { Link } from "gatsby"
import {
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact"
import React, { useState } from "react"
import UserIcon from "./components/userIcon"

const NavbarPage = () => {
  const [collapseID, setCllapseID] = useState(false)

  return (
    <MDBNavbar color="info-color" expand="md" dark>
      <MDBNavbarBrand>
        <strong className="white-text">Store</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => setCllapseID(!collapseID)} />
      <MDBCollapse id="navbarCollapse3" isOpen={collapseID} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <Link to="#!" className="nav-link">
              Home
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="#!" className="nav-link">
              Features
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="#!" className="nav-link">
              Pricing
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">MDBDropdown</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link
              className="waves-effect waves-light d-flex align-items-center nav-link"
              to="#!"
            >
              1
              <MDBIcon icon="envelope" className="ml-1" />
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <UserIcon />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavbarPage
