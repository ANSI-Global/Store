import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBSwitch,
} from "mdbreact"
import React from "react"

interface props {
  setCategoryID: Function
}

const AdditionalCard = (props: props) => {
  const { setCategoryID } = props

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">
              Additional Info
            </MDBCardTitle>
            <MDBCardBody>
              <MDBInput
                label="Category"
                value="Shoe"
                onChange={({ currentTarget }) =>
                  setCategoryID(currentTarget.value)
                }
              />
              <MDBInput type="Labels" label="Description" value="<p>Cat</p>" />
              isFeatured: <MDBSwitch />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default AdditionalCard
