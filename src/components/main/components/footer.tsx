import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact"
import React from "react"

const FooterPagePro = () => (
  <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
    <MDBContainer className="text-center text-md-left">
      <MDBRow className="text-center text-md-left mt-3 pb-3">
        <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">ANSI Global</h6>
          <p>
            Here you can use rows and columns here to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p>
            <a href="#!">Store</a>
          </p>
          <p>
            <a href="#!">Services</a>
          </p>
          <p>
            <a href="#!">Homepage</a>
          </p>
          <p>
            <a href="#!">Bootstrap Angular</a>
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        </MDBCol>
        <hr className="w-100 clearfix d-md-none" />
        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
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
        <MDBCol md="8" lg="8">
          <p className="text-center text-md-left grey-text">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.ansiglobal.com"> ansiglobal.com </a>
          </p>
        </MDBCol>
        <MDBCol md="4" lg="4" className="ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBFooter>
)

export default FooterPagePro
