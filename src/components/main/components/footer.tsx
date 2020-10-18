import { Link } from "gatsby"
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact"
import React from "react"

const FooterPage = () => (
  <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
    <MDBContainer className="text-center text-md-left" fluid>
      <MDBRow className="text-center text-md-left mt-3 pb-3">
        <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">
            ANSI Global (PVT) LTD
          </h6>
          <p>
            ANSI Global is primary Sri Lanka based company which is active in
            eCommerce, eServices, agriculture, fishing and much more! In our
            company customer is our primary concern.
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
          <p>
            <a href="https://store.ansiglobal.com">Store</a>
          </p>
          <p>
            <a href="https://services.ansiglobal.com">Services</a>
          </p>
          <p>
            <a href="https://ansiglobal.com">Homepage</a>
          </p>
          <p>
            <a href="https://hire.ansiglobal.com">Jobs</a>
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <Link to="/profile">Your Account</Link>
          </p>
          <p>
            <Link to="/ship">Shipping Rates</Link>
          </p>
          <p>
            <Link to="/faq">Help</Link>
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i className="fa fa-building mr-3" />
            Business registration: P V 00209114
          </p>
          <p>
            <i className="fa fa-home mr-3" />
            ANSI Global (Pvt) Ltd, 115/8, Mattegoda Terrace, Mattegoda, 10240
            Sri Lanka.
          </p>
          <p>
            <i className="fa fa-envelope mr-3" /> ansi@ansiglobal.com
          </p>
          <p>
            <i className="fa fa-phone mr-3" /> +94 11 278 3615
          </p>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow className="d-flex align-items-center">
        <MDBCol>
          <p className="text-center grey-text">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.ansiglobal.com"> ansiglobal.com </a>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBFooter>
)

export default FooterPage
