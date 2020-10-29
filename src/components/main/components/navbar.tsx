import { Link } from "gatsby"
import {
  MDBBtn,
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
import { useDispatch, useSelector } from "react-redux"
import { updateSearchBar } from "../../../state/globalReducer"
import { updateNoItems } from "./cartReducer"
import UserIcon from "./components/userIcon"
import "./style.sass"

interface state {
  cart: { items: [number] }
  global: { searchBar: string }
  products: { departments: [string] }
}

const NavbarPage = () => {
  const [collapseID, setCllapseID] = useState(false)
  const cartItems = useSelector((state: state) => state.cart.items).length
  const { searchBar } = useSelector((state: state) => state.global)
  const { departments } = useSelector((state: state) => state.products)
  const dispatch = useDispatch()

  return (
    <MDBNavbar color="info-color" expand="md" dark>
      <MDBNavbarBrand>
        <strong className="white-text">Store</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => setCllapseID(!collapseID)} />
      <MDBCollapse id="navbarCollapse3" isOpen={collapseID} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link to="/product/500" className="nav-link">
              Product
            </Link>
          </MDBNavItem>
          <section className="nav-fill">
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className="navbar-dropdown">
                  <div className="d-none d-md-inline">All</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  {departments.map((department, index) => (
                    <MDBDropdownItem key={index} href="#!">
                      {department}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <form className="form-inline active-pink-3 active-pink-4 mw-200 nav-link">
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchBar}
                  onChange={({ currentTarget }) =>
                    dispatch(updateSearchBar(currentTarget.value))
                  }
                />
                <MDBBtn color="orange" className="search-btn">
                  <MDBIcon icon="search" />
                </MDBBtn>
              </form>
            </MDBNavItem>
          </section>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          {cartItems ? (
            <MDBNavItem>
              <Link
                className="waves-effect waves-light d-flex align-items-center nav-link"
                to="#!"
              >
                {cartItems}
                <MDBIcon
                  icon="shopping-cart"
                  className="ml-1"
                  onClick={() => dispatch(updateNoItems(cartItems + 1))}
                />
              </Link>
            </MDBNavItem>
          ) : null}
          <MDBNavItem>
            <UserIcon />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default NavbarPage
