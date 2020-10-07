import { navigate } from "gatsby"
import { auth, useAuth } from "gatsby-theme-firebase"
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
} from "mdbreact"
import React from "react"

const UserIcon = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()

  return (
    <MDBDropdown>
      <MDBDropdownToggle className="dopdown-toggle" nav>
        {isLoggedIn && profile.photoURL ? (
          <img
            src={profile.photoURL}
            className="rounded-circle z-depth-0"
            style={{ height: "35px", padding: 0 }}
            alt={`User Photo: ${profile.displayName}`}
          />
        ) : (
          <MDBIcon icon="user" onClick={() => navigate("/user/login")} />
        )}
      </MDBDropdownToggle>
      {isLoggedIn ? (
        <MDBDropdownMenu className="dropdown-default" right>
          <MDBDropdownItem onClick={() => navigate("/user")}>
            My account
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => auth.signOut}>
            <MDBIcon icon="sign-out-alt" /> Log out
          </MDBDropdownItem>
        </MDBDropdownMenu>
      ) : null}
    </MDBDropdown>
  )
}

export default UserIcon
