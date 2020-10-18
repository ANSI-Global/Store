import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdbreact"
import React from "react"
import "./style.sass"

const BuyNow = () => {
  const onClick = num => {}
  var radio
  return (
    <MDBContainer fluid>
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol size="8">
              <MDBInput
                gap
                onClick={onClick(1)}
                checked={radio === 2 ? true : false}
                label="Buy new:"
                type="radio"
              />
            </MDBCol>
            <MDBCol>Rs.200/=</MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="8">
              <MDBInput
                gap
                onClick={onClick(2)}
                checked={radio === 1 ? true : false}
                label="Buy refurbished:"
                type="radio"
              />
            </MDBCol>
            <MDBCol>Rs.100/=</MDBCol>
          </MDBRow>
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol>
                <MDBBtn color="yellow" size="sm" className="buyBtn" rounded>
                  <MDBRow>
                    <MDBCol size="2">
                      <MDBIcon icon="cart-arrow-down" />
                    </MDBCol>
                    <MDBCol>Add to cart</MDBCol>
                  </MDBRow>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn color="orange" size="sm" className="buyBtn" rounded>
                  <MDBRow>
                    <MDBCol size="2">
                      <MDBIcon icon="play" />
                    </MDBCol>
                    <MDBCol>BuyNow</MDBCol>
                  </MDBRow>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default BuyNow
