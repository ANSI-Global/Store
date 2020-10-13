import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Stars from "./components/stars"
import UserRatings from "./components/userRating"

interface props {
  rating?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  productID: string
  noOfRatings?: number
  fauna:any
}

const Product = (props: props) => {
  const { rating = 0, productID, noOfRatings = 0 ,fauna} = props
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="2">
          <Stars rating={rating} />
        </MDBCol>
        <MDBCol size="6">
          <MDBRow>
           
            <MDBCol>
              <UserRatings productID={productID} fauna={fauna}/>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol size="4">{noOfRatings} ratings</MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Product
