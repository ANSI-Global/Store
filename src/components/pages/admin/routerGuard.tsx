import { navigate } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import { MDBSpinner } from "mdbreact"
import PropTypes from "prop-types"

const adminGuard = ({ children }) => {
  const myAuth = "kea1UpSdPwS5Mvf4jn0nxnHeGEF3"
  const { isLoading, isLoggedIn, profile } = useAuth()
  if (!isLoading) {
    if (isLoggedIn) {
      if (profile.uid == myAuth) {
        return children
      } else {
        return (
          <p>
            You are not authorized to visit admin panel, request admin for
            clearance!
          </p>
        )
      }
    } else {
      navigate("/user/login")
      return null
    }
  } else {
    return <MDBSpinner multicolor />
  }
}

adminGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default adminGuard
