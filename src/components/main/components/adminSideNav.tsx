import { Link } from "gatsby"
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBSideNav,
  MDBSideNavCat,
  MDBSideNavNav,
} from "mdbreact"
import React, { useState } from "react"
import "./style.sass"

const SideNavPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MDBNavbar color="unique-color-dark" dark>
        <MDBBtn
          size="sm"
          className="bars-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MDBIcon icon="bars" size="2x" />
        </MDBBtn>
        Home
      </MDBNavbar>
      <MDBContainer>
        <MDBSideNav
          logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          hidden
          triggerOpening={isOpen}
          breakWidth={1300}
          className="deep-purple darken-4"
        >
          <li>
            <ul className="social">
              <li>
                <a href="#!">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon fab icon="twitter" />
                </a>
              </li>
            </ul>
          </li>
          <MDBSideNavNav>
            <MDBSideNavCat
              name="Submit blog"
              id="submit-blog"
              icon="chevron-right"
            >
              <Link to="/">Submit listing</Link>
              <Link to="/">Registration form</Link>
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Instruction"
              id="instruction"
              iconRegular
              icon="hand-pointer"
              href="#"
            >
              <Link to="/">For bloggers</Link>
              <Link to="/">For authors</Link>
            </MDBSideNavCat>
            <MDBSideNavCat name="About" id="about" icon="eye">
              <Link to="/">Instruction</Link>
              <Link to="/">Monthly meetings</Link>
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Contact me"
              id="contact-me"
              iconRegular
              icon="envelope"
            >
              <Link to="/admin">Dashboard</Link>
              <Link to="/">Store</Link>
              <Link to="/admin/products">Products</Link>
              <Link to="/admin/orders">Orders</Link>
              <Link to="/admin/customers">Customers</Link>
              <Link to="/admin/pages">Pages</Link>
              <Link to="/admin/settings">Settings</Link>
              <Link to="/admin/apps">Apps</Link>
              <Link to="/admin/logout">Logout</Link>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    </>
  )
}

export default SideNavPage
