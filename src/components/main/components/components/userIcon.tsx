import { Link } from "gatsby"
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from "mdbreact"
import React, { useState } from "react"

const UserIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  function logOut() {
    setIsLoggedIn(false)
  }

  if (isLoggedIn) {
    return (
      <MDBDropdown>
        <MDBDropdownToggle className="dopdown-toggle" nav>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
            className="rounded-circle z-depth-0"
            style={{ height: "35px", padding: 0 }}
            alt=""
          />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default" right>
          <MDBDropdownItem href="#!">My account</MDBDropdownItem>
          <MDBDropdownItem onClick={() => logOut}>
            <MDBIcon icon="sign-out-alt" /> Log out
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
  } else {
    return (
      <Link
        to="/login"
        className="waves-effect waves-light d-flex align-items-center nav-link"
      >
        <MDBIcon icon="user-circle" className="ml-1" />
      </Link>
    )
  }
}

export default UserIcon
