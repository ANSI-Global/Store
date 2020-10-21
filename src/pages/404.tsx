import { Link } from "gatsby"
import {
  MDBBtn,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBJumbotron,
  MDBRow,
} from "mdbreact"
import React from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"

interface props {
  default?: boolean
}

const NotFoundPage = (props: props) => (
  <Layout>
    <SEO title="404: Not found" />
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  NOT FOUND
                </MDBCardTitle>
                <p className="mx-5 mb-5">
                  You just hit a route that doesn&#39;t exist... the sadness.!
                </p>
                <Link to="/">
                  <MDBBtn outline color="cyan" className="mb-5">
                    <MDBIcon icon="clone" className="mr-2"></MDBIcon> Go to home
                    page
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default NotFoundPage
