import { navigate } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import PropTypes from "prop-types"

const adminGuard = ({ children }) => {
  const { isLoggedIn, profile } = useAuth()
  if (isLoggedIn && profile.uid) {
    console.log(profile.uid)
    return children
  } else {
    navigate("/user/login")
    return null
  }
}

adminGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default adminGuard
