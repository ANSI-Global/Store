import { Link } from "gatsby"
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBSideNav,
  MDBSideNavNav,
} from "mdbreact"
import React, { useState } from "react"
import "./style.sass"

const SideNavPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MDBNavbar color="unique-color-dark" dark>
        <MDBBtn size="sm" className="" onClick={() => setIsOpen(!isOpen)}>
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
          href="/admin"
        >
          <MDBSideNavNav>
            <Link to="/admin">Dashboard</Link>
            <Link to="/">Store</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/customers">Customers</Link>
            <Link to="/admin/pages">Pages</Link>
            <Link to="/admin/settings">Settings</Link>
            <Link to="/admin/apps">Apps</Link>
            <Link to="/admin/logout">Logout</Link>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
    </>
  )
}

export default SideNavPage
