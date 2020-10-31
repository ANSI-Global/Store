import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import {
  MDBCollapse,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from "mdbreact"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateNoItems } from "./cartReducer"
import Search from "./components/search"
import "./components/styles.sass"
import UserIcon from "./components/userIcon"

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
  const location = useLocation()
  const links = [
    { text: "Home", link: "/" },
    { text: "Products", link: "/products" },
  ]
  return (
    <MDBNavbar color="info-color" expand="md" dark>
      <MDBNavbarBrand>
        <strong className="white-text">Store</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => setCllapseID(!collapseID)} />
      <MDBCollapse id="navbarCollapse3" isOpen={collapseID} navbar>
        <MDBNavbarNav left>
          {links.map((link, index) => (
            <MDBNavItem key={index} active={location.pathname == link.link}>
              <Link to={link.link} className="nav-link">
                {link.text}
              </Link>
            </MDBNavItem>
          ))}
          <MDBNavItem>
            <Search />
          </MDBNavItem>
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
