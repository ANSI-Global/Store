import { Link } from "gatsby"
import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBSideNav,
  MDBSideNavNav,
} from "mdbreact"
import React, { useState } from "react"

const SideNavPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MDBNavbar color="light" dark>
        <MDBIcon icon="bars" size="2x" onClick={() => setIsOpen(!isOpen)} />
        <Link to="/admin">Home</Link>
      </MDBNavbar>
      <MDBContainer>
        <MDBSideNav
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
