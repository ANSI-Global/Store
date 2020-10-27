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
} from "mdbreact"
import React from "react"
import "./style.sass"

interface props {
  name?: string
  src?: string
  price?: number
}

const Product = (props: props) => {
  const { name = "undefined", src = "undefined", price = 0 } = props

  return (
    <>
      <MDBCol>
        <MDBCard className="itemCard">
          <Link to={`/product/100`}>
            <MDBCardImage
              src={src}
              alt={name}
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
            color="pink"
            className="heart-overlay"
            onClick={() => {}}
          >
            <MDBAnimation type="pulse" infinite>
              <MDBIcon far icon="heart" />
            </MDBAnimation>
          </MDBBtn>
          {/**Jumbing buttons */}
          <MDBContainer fluid className="btn-hide">
            <MDBBtn color="blue-grey" className="qViewBtn">
              <MDBIcon far icon="eye" className="mr-1" />
              Quick View
            </MDBBtn>
            <MDBBtn color="blue-grey" className="addCartBtn">
              <MDBIcon icon="cart-arrow-down" className="mr-1" />
              Add to Cart
            </MDBBtn>
          </MDBContainer>
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
              {new Intl.NumberFormat("si-SI", {
                style: "currency",
                currency: "LKR",
              }).format(price)}
              /=
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  )
}

export default Product
