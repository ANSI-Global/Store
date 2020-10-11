import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Stars from "./components/stars"
import UserRatings from "./components/userRating"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  userRating?: 0 | 1 | 2 | 3 | 4 | 5
  noOfRatings?: number
}

const Product = (props: props) => {
  const { rating = 0, userRating = 0, noOfRatings = 0 } = props
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="2">
          <Stars rating={rating} />
        </MDBCol>
        <MDBCol size="6">
          <MDBRow>
            <MDBCol>Your rating: </MDBCol>
            <MDBCol>
              <UserRatings rating={userRating} />
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol size="4">{noOfRatings} ratings</MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Product
