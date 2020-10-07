import { navigate } from "gatsby"
import { useAuth } from "gatsby-theme-firebase"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"

const Product = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()

  if (isLoading) {
    return <p>Loading...</p>
  } else {
    if (isLoggedIn) {
      return (
        <Layout>
          <SEO
            title={`User: ${profile.displayName}`}
            description="User management panel"
          />
          <MDBContainer>
            <MDBRow>
              <MDBCol xl="5" md="4" className="mb-3 text-center">
                <img
                  src={profile.photoURL}
                  className="img-fluid z-depth-1 rounded-circle"
                  alt="User photo"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                Your profile: {isLoading && <p>Loading..</p>}
                {profile && <p>Hello {profile.displayName}</p>}
                {profile && <p>Hello {profile.email}</p>}
                {profile && <p>Hello {profile.uid}</p>}
                {profile.phoneNumber && <p>Phone {profile.phoneNumber}</p>}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Layout>
      )
    } else {
      navigate("/user/login")
      return null
    }
  }
}

export default Product
