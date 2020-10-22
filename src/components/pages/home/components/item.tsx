import { Link } from "gatsby"
import {
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdbreact"
import React from "react"
import "./style.sass"

const Product = () => (
  <>
    <MDBCol>
      <MDBCard className="itemCard">
        <Link to={`/product/100`}>
          <MDBCardImage
            src="http://dev.ncc.echonlabs.com/wp-content/uploads/2020/09/IMG_1486-500x500.jpg"
            alt={`product name`}
            className="card-image"
            waves
            zoom
            hover
          />
        </Link>
        {/**Heart Overlay */}
        <MDBBtn
          rounded
          floating
          color="yellow"
          className="heart-overlay"
          onClick={() => {}}
        >
          <MDBAnimation type="pulse" infinite>
            <MDBIcon far icon="heart" />
          </MDBAnimation>
        </MDBBtn>
        {/**Jumbing buttons */}
        <MDBContainer fluid className="btn-hide">
          <MDBRow>
            <MDBCol>
              <MDBBtn flat>
                <MDBIcon far icon="eye" className="mr-1" />
                Quick View
              </MDBBtn>
            </MDBCol>
            <MDBCol>
              <MDBBtn flat>
                <MDBIcon icon="cart-arrow-down" className="mr-1" />
                Add to Cart
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBCardBody>
          <MDBCardTitle>Toolbox</MDBCardTitle>
          <MDBCardText>Rs.300/=</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </>
)

export default Product
