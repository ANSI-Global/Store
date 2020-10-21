import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdbreact"
import React from "react"

interface props {
  path?: string
  id?: string
}

const ProductTemplate = (props: props) => {
  const images = []

  const {} = props

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard className="p-2 m-4">
            <MDBCardTitle className="text-center my-2">Images</MDBCardTitle>
            <MDBCardBody>
              <img src="" alt="" />
            </MDBCardBody>
          </MDBCard>

          <MDBInput
            label="images"
            type="text"
            onChange={({ currentTarget }) => images.push(currentTarget.value)}
          />

          <MDBIcon icon="plus" />
          <MDBBtn onClick={() => {}} rounded gradient="aqua">
            Update
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ProductTemplate
