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
import { useDispatch, useSelector } from "react-redux"
import { setCategoryID } from "../../../../../state/adminProductReducer"

interface state {
  adminProduct: {
    categoryID
  }
}

const AdditionalCard = () => {
  const { categoryID } = useSelector((state: state) => state.adminProduct)

  const dispatch = useDispatch()

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
                value={categoryID}
                onChange={({ currentTarget }) =>
                  dispatch(setCategoryID(currentTarget.value))
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
